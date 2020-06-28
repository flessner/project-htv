const Response = require('smarch-lib-responses');

const tf = require('@tensorflow/tfjs');
const Jimp = require('jimp');
const pixels = require('image-pixels');

module.exports.k1006 = async event => {
  console.log('Starting execution...');

  // Getting model from S3 & initializing it.
  try {
    if(model == undefined) {
      var model = await tf.loadLayersModel(process.env.S3_MODELS_URL);
      console.log('Model was successfully initialized!');
    }
  } catch(e) {
    console.error(e);
    return Response._500({"message": "Failed to download the model!"});
  }

  // Getting image from request body
  try {
    var base64 = JSON.stringify(JSON.parse(event.body).data.image);
    base64 = base64.replace(/data:image\/(png|jpg|jpeg|gif);base64,/, '');
    console.log('Recieved the base 64 image.');
  } catch(e) {
    console.error(e);
    return Response._400({"message": "The Image couldn't be located at body/data/image."});
  }

  // Resizing & Converting to a Tensor
  try {
    var jimpImage = await Jimp.read(Buffer.from(base64, 'base64')).then(img => {
      return img.contain(400, 400);
    })
    .catch(e => {
      console.error(e);
      return Response._500({"message": "Image couldn't be resized."});
    });;
    var tfImage = await pixels(jimpImage.getBase64Async(Jimp.MIME_JPEG), {height: '400', width: '400'});
    tfImage = tf.browser.fromPixels(tfImage);
    tfImage = tfImage.expandDims();
    console.log('The image was transformed into a tensor.');
  } catch(e) {
    console.error(e)
    return Response._500({"message": "Image couldn't be transformed into a tensor."});
  }

  // Making the actual prediction
  try {
    var prediction = model.predict(tfImage);
    prediction = prediction.toFloat();
    prediction = prediction.dataSync();
    console.log(prediction);
    console.log('The prediction has been made.')
  } catch(e) {
    console.error(e)
    return Response._500({"message": "The model failed to predict the values."});
  }

  // ['sk-eisen-nickel', 'nachverzinnt', 'sk-kupfer']
  // Returning data on completion
  return Response._200({
    "data": {
      "sk-eisen-nickel": prediction[0],
      "nachverzinnt": prediction[1],
      "sk-kupfer": prediction[2]
    }
  });
}
