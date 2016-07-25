/*
 * simple promise
 * The promise constructor accepts a function with 2 arguments, resolve (function) and reject (
 * function). resolve is called upon success, and reject is called upon error.
 * To use a promise, use either then or catch. Use then for resolve and catch for reject
 */
const getBearPromise = () => {
  require('path');
  return new Promise((resolve, reject) => {
    require('fs').readFile(__dirname + '/resources/bears.txt', 'utf-8', (err, text) => {
      if (err) {
        reject(err);
      } else {
        resolve(text);
      }
    })
  });
};
const getRandomBear = () => {
  getBearPromise().then(text => {
    const lines = text.split('\n');
    // need to add -1 because lines.pop() will always be ''
    const randomLine = lines[Math.floor(Math.random() * (lines.length - 1))];
    console.log(randomLine);
  }).catch(error => console.log(error.message));
};
getRandomBear();
getRandomBear();
getRandomBear();
TODO
