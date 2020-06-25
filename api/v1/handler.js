Response = require('smarch-lib-responses');
tf = require('@tensorflow/tfjs');
Jimp = require('jimp');

module.exports.k1006 = async event => {
  let base64 = '';
  console.log('Recieved the base 64 image.');
  try {
    base64 = JSON.stringify(JSON.parse(event.body).data.image);
    console.log('Recieved the base 64 image.');
  } catch(e) {
    console.error(e);
    return Response._400({"message": "The Image couldn't be located at body/data/image."});
  }

  try {
    process.chdir('/tmp');
    console.log('New working directory: ' + process.cwd());
  } catch (e) {
    console.error(e);
    return Response._500({"message": "Failed to change working directory!"});
  }

  try {
    Jimp.read(Buffer.from(base64.replace(/data:image\/(png|jpg|jpeg);base64,/, ''), 'base64'))
    .then(image => {
      image.contain(400, 400);
      image.write('image.png');
    });
    console.log('Image successfully placed in' + process.cwd() + 'directory.');
  } catch(e) {
    console.error(e)
    return Response._500({"message": "Image couldn't be resized."});
  }

  return Response._200({
    "message": "Go Serverless!"
  });
}
