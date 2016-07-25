'use strict';

/**
  strings are immutable. Javascript only creates new strings. It never changes an existing one.
 */
const immutability = function() {
  console.log('# immutability');
  let a = 'something';
  const doSomeChange = function(a) {
    a.concat('else');
  };
  doSomeChange(a);
  console.log(a); // something
  a.concat('else');
  console.log(a); // something
  a.slice('s');
  console.log(a); // something
  // here Javascript creates a new string and assign it to a
  a += 'else';
  console.log(a); // somethingelse
};
immutability();


/**
  $string.slice($start, $end) returns a new string that is the substring of $string, starts at $start (inclusive) and ends at $end (exclusive)

  $string.substring does the same thing, except for the rare case where $start < $end, where it automatically swap the two value and calls $string(substring($end, $start))
 */
const sliceAndSubstring = function() {
  console.log('# sliceAndSubstring');
  const a = 'something';
  console.log(a.slice(3, 6)); // eth
  console.log(a.slice(2)); // mething
  console.log(a.slice(null, 4)); // some
  console.log(a.slice(99, 77)); // ''
  console.log(a.slice(3, 1)); // ''
  console.log(a.slice(3, 3)); // ''

  console.log(a.substring(3, 6)); // eth
  console.log(a.substring(2)); // mething
  console.log(a.substring(null, 4)); // some
  console.log(a.substring(99, 77)); // ''
  console.log(a.substring(3, 1)); // om
  console.log(a.substring(3, 3)); // ''
};
sliceAndSubstring();

/**
  $string.indexOf($anotherString) returns the index of the first character of the first match of
  $anotherString in $string, if no match is found, it returns -1.

  $string.lastIndexOf($anotherString) returns the index of the first character of the last match, and -1 for not found

  These two functions do not take regex
 */
const indexOfAndLastIndexOf = function() {
  console.log('# indexOfAndLastIndexOf');
  const a = 'something else';
  console.log(a.indexOf('s')); // 0
  console.log(a.indexOf('thing')); // 4
  console.log(a.indexOf('th0ng')); // -1
  console.log(a.indexOf(/s/)); // -1

  console.log(a.lastIndexOf('s')); // 12
  console.log(a.lastIndexOf('thing')); // 4
  console.log(a.lastIndexOf('th0ng')); // -1
  console.log(a.lastIndexOf(/s/)); // -1
};
indexOfAndLastIndexOf();
