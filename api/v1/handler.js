const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const fs = require("fs");
const Response = require('smarch-lib-responses');

const tf = require('@tensorflow/tfjs');
const AdmZip = require('adm-zip');
const Jimp = require('jimp');
const pixels = require('image-pixels');

module.exports.k1006 = async event => {
  console.log('Starting execution...');

  // Getting model from S3, if it isn't already downloaded
  if (fs.existsSync('/tmp/model.json')) {
    console.log('Downloading the model was skipped.');
  } else {
    try {
      var modelFile = await s3.getObject({
        Bucket: process.env.S3_MODELS,
        Key: 'v1/k1006.zip'
      }).promise();
      var zip = new AdmZip(Buffer.from(modelFile.Body, 'binary'));
      zip.extractAllTo("/tmp/", true);
      console.log('Model was successfully saved!');
    } catch(e) {
      console.error(e);
      return Response._500({"message": "Failed to download the model!"});
    }
  }

  // Loading model in TF
  if (model != undefined) {
    try {
      var model = await tf.loadLayersModel('file://tmp/model.json');
      console.log('Successfully loaded the model in Tensorflow.');
    } catch(e) {
      console.error(e);
      return Response._500({"message": "The model wasn't able to load in Tensorflow."});
    }
  } else {
    console.log('Skipped loading the model.');
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
    var tfImage = await pixels(jimpImage.getBase64Async(Jimp.MIME_PNG), 
    {
      height: '400',
      width: '400'
    });
    console.log(tfImage);
    tf.fromPixels(tfImage);
  } catch(e) {
    console.error(e)
    return Response._500({"message": "Image couldn't be transformed into a tensor."});
  }

  // Making the actual prediction
  try {
    var prediction = model.predict(tfImage);
    prediction.print();
  } catch(e) {
    console.error(e)
    return Response._500({"message": "The model failed to predict the values."});
  }

  // Returning data on completion
  return Response._200({
    "message": "This is it!",
    "data": {}
  });
}
