AWS = require('aws-sdk');
s3 = new AWS.S3();

Response = require('smarch-lib-responses');
tf = require('@tensorflow/tfjs');
Jimp = require('jimp');

module.exports.k1006 = async event => {
  try {
    process.chdir('/tmp');
    console.log('New working directory: ' + process.cwd());
  } catch (e) {
    console.error(e);
    return Response._500({"message": "Failed to change working directory!"});
  }

  try {
    var base64 = JSON.stringify(JSON.parse(event.body).data.image);
    console.log('Recieved the base 64 image.');
  } catch(e) {
    console.error(e);
    return Response._400({"message": "The Image couldn't be located at body/data/image."});
  }

  if (tfModel == undefined) {
    try {
      var tfModel = await s3.getObject({
        Bucket: process.env.S3_MODELS,
        Key: 'v1/model-k1006.tflite'
      }).promise();
      fs.writeFileSync('/tmp/model-k1006.tflite', tfModel.Body.toString());
      console.log('Model was saved under /tmp directory.')
    } catch (e) {
        console.error(e);
        return Response._500({"message": "The service wasn't able to acquire the model data."});
    }
  } else {
    console.log('Getting model was skipped.')
  }

  try {
    Jimp.read(Buffer.from(base64.replace(/data:image\/(png|jpg|jpeg|gif);base64,/, ''), 'base64'))
    .then(image => {
      image.contain(400, 400);
      image.write('image.png');
    });
    console.log('Image successfully placed in ' + process.cwd() + ' directory.');
  } catch(e) {
    console.error(e)
    return Response._500({"message": "Image couldn't be resized."});
  }

  return Response._200({
    "message": "Go Serverless!",
    "data": {}
  });
}
