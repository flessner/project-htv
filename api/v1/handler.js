AWS = require('aws-sdk');
s3 = new AWS.S3();

fs = require("fs");
Response = require('smarch-lib-responses');

tf = require('@tensorflow/tfjs');
Jimp = require('jimp');

module.exports.k1006 = async event => {
  var modelName = 'model-k1006.tflite';

  // Getting model from S3, if it doesn't exist
  try {
    if (fs.existsSync(path)) {
      console.log('Getting model was skipped.')
    }
  } catch(e) {
    try {
      var tfModel = await s3.getObject({
        Bucket: process.env.S3_MODELS,
        Key: 'v1/' + modelName
      }).promise();
      fs.writeFileSync('/tmp/' + modelName, tfModel.Body.toString());
      console.log('Model was saved under /tmp/' + modelName);
    } catch (e) {
        console.error(e);
        return Response._500({"message": "The service wasn't able to acquire the model data."});
    }
  }

  // Change working directory to /tmp
  try {
    process.chdir('/tmp');
    console.log('New working directory: ' + process.cwd());
  } catch (e) {
    console.error(e);
    return Response._500({"message": "Failed to change working directory!"});
  }

  // Getting image from request body
  try {
    var base64 = JSON.stringify(JSON.parse(event.body).data.image);
    console.log('Recieved the base 64 image.');
  } catch(e) {
    console.error(e);
    return Response._400({"message": "The Image couldn't be located at body/data/image."});
  }

  // Resizing & Saving image
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
    "message": "We did it!",
    "data": {}
  });
}
