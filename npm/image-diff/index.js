var imageDiff = require('image-diff');
imageDiff({
  actualImage: 'actual.png',
  expectedImage: 'expected.png',
  diffImage: 'diff.png',
}, function (error, imagesAreSame) {
  console.log(error, imagesAreSame);
  // error will be any errors that occurred
  // imagesAreSame is a boolean whether the images were the same or not
  // diffImage will have an image which highlights differences
});
