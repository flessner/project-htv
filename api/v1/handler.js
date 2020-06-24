Response = require('smarch-lib-responses');
TF = require('@tensorflow/tfjs');
Jimp = require('jimp');

module.exports.classify = async event => {

  return Response._200({'message':'Go Serverless!'});
}
