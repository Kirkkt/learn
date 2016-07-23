'use strict';

/**
  Unlike primitive values, arrays are passed by reference and mutable. Be careful.
 */
const passByReferenceAndMutability = function() {
  console.log('# passByReferenceAndMutability');
  const a = [1, 2, 3];
  const doSomeChange = function(a) {
    a.shift();
  };
  doSomeChange(a);
  console.log(a); // [2, 3]
  const b = 1;
  const doSomeOtherChange = function(b) {
    b++;
  };
  doSomeOtherChange(b);
  console.log(b); // 1
};
passByReferenceAndMutability();

/**
  $array.push($item) adds $item to the end of $array and returns the new length

  $array.pop() removes the item at the end of $array and returns it
 */
const pushAndPop = function() {
  console.log('# pushAndPop');
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
  $array.unshift($item) adds $item to the head of $array and returns the new length

  $array.shift() removes the item at the head of $array and returns it
 */
const unshiftAndShift = function() {
  console.log('# unshiftAndShift');
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
  $array.indexOf($item) returns the smallest index of the item that is stricted equal (===) to
  $item, and if there is no such item, it returns -1

  $array.lastIndexOf($item) acts similarly, only except that it returns the largest index instead
 */
const indexOfAndLastIndexOf = function() {
  console.log('# indexOfAndLastIndexOf');
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
  $array.concat($anotherArray) returns a new array as a joint of both original arrays, while leaving
  the original arrays intact.

  $array.concat($item) returns a new array as a joint of $array and $item (assuming it's not an
  array), with $item being the last item of $array, while leaving the original array intact.
 */
const concat = function() {
  console.log('# concat');
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
  $array.slice($start, $end) returns a segment of $array from $start (inclusive) to $end
  (non-inclusive), while leaving the original array intact.

  $array.slice(start) same as $array.slice(start, $array.length)

  $array.slice(0) clones $array
 */
const slice = function() {
  console.log('# slice');
  const a = [0, 1, 2, 3, 4, 5, 6];
  const b = a.slice(2, 5);
  console.log(a); // [0, 1, 2, 3, 4, 5, 6]
  console.log(b); // [2, 3, 4]
};
slice();

/**
  $array.splice is a powerful and general tool to add items to and remove items from $array. It
  returns an array with items removed from $array

  $array.splice($from, howMany) extracts howMany consecutive items from $from (inclusive), turns
  these items into an array and returns it. $array is modified with these items removed.

  $array.splice($from, null, item0, item1, ..., itemn) inserts item0, item1, ... itemn into $array,
  with item0 being place at index $from, and returns [], since nothing is removed. $array is then
  modified.

  $array.splice($from, howMany, item0, item1, ..., itemn) combines the two, whereas it removes
  howMany consecutive items starting from $from (inclusive), inserts item0, item1, ..., itemn there
  instead, and returns an array with all items removed from $array. $array is then modified.
 */

const splice = function() {
  console.log('# splice');
  let a;

  a = [0, 1, 2, 3, 4, 5, 6];
  console.log(a.splice(2, 0)); // []
  console.log(a); // [0, 1, 2, 3, 4, 5 ,6]

  a = [0, 1, 2, 3, 4, 5, 6];
  console.log(a.splice(2, 999)); // [2, 3, 4, 5, 6]
  console.log(a); // [0, 1]

  a = [0, 1, 2, 3, 4, 5, 6];
  console.log(a.splice(2, 2)); // [2, 3]
  console.log(a); // [0, 1, 4, 5 ,6]

  a = [0, 1, 2, 3, 4, 5, 6];
  console.log(a.splice(2, null, 'william', 'shakespeare')); // []
  console.log(a); // [0, 1, 'william', 'shakespeare', 2, 3, 4, 5 ,6]

  a = [0, 1, 2, 3, 4, 5, 6];
  console.log(a.splice(2, 999, 'william', 'shakespeare')); // [2, 3, 4, 5, 6]
  console.log(a); // [0, 1, 'william', 'shakespeare']

  a = [0, 1, 2, 3, 4, 5, 6];
  console.log(a.splice(2, 1, 'william')); // [2]
  console.log(a); // [0, 1, 'william', 3, 4, 5, 6]
}
splice();

/**
  $array.map(function($item) {return ...;}) transforms $array into an array of equal length with
  each item being what the function specifies. $array is intact.
 */
const map = function() {
  console.log('# map');
  const a = [
    {
      name: 'john',
      age: 38,
      gender: 'm',
    },
    {
      name: 'jane',
      age: 27,
      gender: 'f',
    },
    {
      name: 'joel',
      age: 51,
      gender: 'm',
    },
  ];
  const b = a.map(function(item) {
    return item.name;
  });
  console.log(b); // ['john', 'jane', 'joel']
  console.log(a); // intact
};
map();

/**
  $array.forEach(function($item) {$item...}) behaves similarly to map, except that it actually
  modifies $array. forEach itself returns undefined
 */
const forEach = function() {
  console.log('# forEach');
  const a = [
    {
      name: 'john',
      age: 38,
      gender: 'm',
    },
    {
      name: 'jane',
      age: 27,
      gender: 'f',
    },
    {
      name: 'joel',
      age: 51,
      gender: 'm',
    },
  ];
  const b = a.forEach(function(item) {
    item.age -= 10;
    item.gender = item.gender === 'm' ? 'f' : 'm';
  });
  console.log(b); // undefined
  console.log(a);
  // [
  //   {
  //     name: 'john',
  //     age: 28,
  //     gender: 'f',
  //   },
  //   {
  //     name: 'jane',
  //     age: 17,
  //     gender: 'm',
  //   },
  //   {
  //     name: 'joel',
  //     age: 41,
  //     gender: 'f',
  //   },
  // ]
};
forEach();

/**
  $array.filter(function($item) {return true || false;}) creates a new array with items in $array
  that make the function inside filter() return true. $array is intact.
 */
const filter = function() {
  console.log('# filter');
  const a = [
    {
      name: 'john',
      age: 38,
      gender: 'm',
    },
    {
      name: 'jane',
      age: 27,
      gender: 'f',
    },
    {
      name: 'joel',
      age: 51,
      gender: 'm',
    },
  ];
  const b = a.filter(function(item) {
    return item.gender === 'm';
  });
  console.log(b);
  // [
  //   {
  //     name: 'john',
  //     age: 38,
  //     gender: 'm',
  //   },
  //   {
  //     name: 'joel',
  //     age: 51,
  //     gender: 'm',
  //   },
  // ]
  console.log(a); // intact
};
filter();

/**
  $array.reduce(function($prev, $item) {return $nextPrevValue;}, $initialPrevValue) is a general
  tool to reduce $array into something simpler. It works by setting $initialPrevValue as the initial
  value for $prev, and update $prev with every return value of the function.
 */
const reduce = function() {
  console.log('# reduce');
  const a = [
    {
      name: 'john',
      age: 38,
      gender: 'm',
    },
    {
      name: 'jane',
      age: 27,
      gender: 'f',
    },
    {
      name: 'joel',
      age: 51,
      gender: 'm',
    },
  ];
  const b = a.reduce(
    function(prev, item) {
      return prev + item.age;
    },
    0
  );
  console.log(b); // 116
  console.log(a); // intact
};
reduce();

/**
  for (const $key in $array) {
    ...
  }
  loops $array with $key being 0, 1, ..., $array.length - 1

  for-in loop also works for objects
 */
const forIn = function() {
  console.log('# forIn');
  const a = ['william', 'shakespeare'];
  for (const key in a) {
    console.log(key);
  }
  // 0
  // 1
  const o = {
    name: 'john',
    address: {
      city: 'san jose, ca',
      street: 'el camino real',
    },
  };
  for (const key in o) {
    console.log(key);
  }
  // name
  // address
};
forIn();

/**
  ES6 feature
  for (const $item of $array) {
    ...
  }
  loops $array with $item being each item

  for-of loop does not work for objects
 */
const forOf = function() {
  console.log('# forOf');
  const a = ['william', 'shakespeare'];
  for (const item of a) {
    console.log(item);
  }
  // william
  // shakespeare
  const o = {
    name: 'john',
    address: {
      city: 'san jose, ca',
      street: 'el camino real',
    },
  };
  // this won't work:
  // for (const value of o) {
  //   console.log(value);
  // }
};
forOf();
