# promise
## demo
- `node simple-promise.js`

## problem
- (sequencial) callback hell: too many levels of indentation
- (parallel) batching: no easy mechanism to batch a number of operations, and provide a single
  callback when all of them is done

## solution (promise)
- (sequencial) callback hell: use .then .catch chain
- (parallel) batching: use **Promise.all**, which accepts an array of promises and offer the same
  mechanism as a normal promise, i.e. with .then and .catch callback

## Basic promise syntax

    new Promise((resolve, reject) => {
      if (operation failed) {
        reject(error);
      } else {
        resolve(data);
      }
    });

or

    new Promise((resolve, reject) => {
      if (operation failed) {
        resolve(error);
      } else {
        resolve(null, data);
      }
    });

and then

    getPromise().then(data => {
      ...
    }).then(data => {
      ...
    });

or

    getPromise().then((error, data) => {
      if (error) {
        ...
      }
      ...
    }).then((error, data) => {
      if (error) {
        ...
      }
      ...
    });
