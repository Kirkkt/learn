'use strict';

/**
  $array.push($item) adds $item to the end of $array and returns the new length
  array_.pop() removes the item at the end of array_ and returns it
 */
const pushAndPop = function() {
  console.log('pushAndPop');
  const arr = [];
  console.log(arr.push('a')); // 1
  console.log(arr.push('b')); // 2
  console.log(arr.push('c')); // 3
  console.log(arr); // ['a', 'b', 'c']
  console.log(arr.pop()); // c
  console.log(arr.pop()); // b
  console.log(arr); // ['a']
};
pushAndPop();

/**
  array_.unshift(newItem) adds a new item to the head of the array and returns the new length
  array.shift() removes the item at the head of array and returns it
 */
const unshiftAndShift = function() {
  console.log('unshiftAndShift');
  const arr = [];
  console.log(arr.unshift(0)); // 1
  console.log(arr.unshift(1)); // 2
  console.log(arr.unshift(2)); // 3
  console.log(arr); // [2, 1, 0]
  console.log(arr.shift()); // 2
  console.log(arr.shift()); // 1
  console.log(arr); // [0]
};
unshiftAndShift();

/**
  array.indexOf(item) returns the smallest index of the item that is stricted equal (===) to item,
  and if there is no such item, it returns -1
  array.lastIndexOf(item) acts similarly, only except that it returns the largest index instead
 */
const indexOfAndLastIndexOf = function() {
  console.log('indexOfAndLastIndexOf');
  const arr = [0, 1, 0, '1', 0, '1'];
  console.log(arr.indexOf(1)); // 1
  console.log(arr.indexOf('1')); // 3
  console.log(arr.indexOf('0')); // -1
  console.log(arr.lastIndexOf(1)); // 1
  console.log(arr.lastIndexOf('1')); // 5
  console.log(arr.lastIndexOf('0')); // -1
};
indexOfAndLastIndexOf();

/**
  array.concat(anotherArray) returns a new array as a joint of both original arrays, while leaving
  the original arrays intact.
  array.concat(item) returns a new array as a joint of array and item (if it's not an array) to the
  end of the array, while leaving the original array intact.
 */
const concat = function() {
  console.log('concat');
  const a = [0, 1, 2];
  const b = [2, 3, 4];
  const c = a.concat(b);
  console.log(a); // [0, 1, 2]
  console.log(b); // [2, 3, 4]
  console.log(c); // [0, 1, 2, 2, 3, 4]
  const d = a.concat(5);
  console.log(a); // [0, 1, 2]
  console.log(d); // [0, 1, 2, 5]
};
concat();

/**
  array.slice(start, end) returns a segment of the array from start (inclusive) to end
  (non-inclusive), while leaving the original array intact.
  array.slice(start) same as array.slice(start, array.length)
  array.slice(0) clones the array
 */
const slice = function() {
  console.log('slice');
  const a = [0, 1, 2, 3, 4, 5, 6];
  const b = a.slice(2, 5);
  console.log(a); // [0, 1, 2, 3, 4, 5, 6]
  console.log(b); // [2, 3, 4]
};
slice();

/*

    array.slice(start); // Omitting end means end = array.length.
    array.slice(0); // Clone array.

    var array = [1,2,3,4];
    array.reduce(function(prev, item) {return prev + item;}, 0); // get the sum of the array, 0 is
        // the starting point, or default prev value.
    var array = [1,2,3,4];
    array.reduce((prev, item) => prev + item, 0); // same as above, but with arrow functions

    // use reduce on an array of objects
    'use strict';
    const a = [
      {a: 1},
      {a: 2},
      {a: 3}
    ];
    a.reduce((prev, item) => prev + item.a, 0);

*/
