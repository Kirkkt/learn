'use strict';

/**
  Primitive Variables are accessed by value, and complex variables are accessed by reference.
*/
const accessByValueAndAccessByReference = function() {
  console.log('# accessByValueAndAccessByReference');

  const a = 1;
  let b = a;
  b = 9;
  console.log(a, b); // 1 9

  const c = [1];
  const d = c;
  d[0] = 9;
  console.log(c[0], d[0]); // 9 9

  const e = {x: 1};
  const f = e;
  f.x = 9;
  console.log(e.x, f.x); // 9 9

};
accessByValueAndAccessByReference();

/**
  `let` and `const` used to create block-scoped variables and constants.
  `var` only creates either global variables or function-scoped variables
  */
const blockScopedVariables = function() {
  console.log('# blockScopedVariables');
  if (true) {
    var a = 0;
  }
  console.log(a); // 0

  if (true) {
    const b = 0;
  }
  try {
    console.log(b);
  } catch (error) {
    console.log('Error:', error.message); // Error: b is not defined
  }

  if (true) {
    let c = 0;
  }
  try {
    console.log(c);
  } catch (error) {
    console.log('Error:', error.message); // Error: c is not defined
  }
};
blockScopedVariables();

/**
  `let` and `const` don't hoist.
  */
const noHoist = function() {
  console.log('# noHoist');

  try {
    console.log(a); // Error: a is not defined
  } catch (error) {
    console.log('Error:', error.message);
  }
  let a = 1;

  try {
    console.log(b); // Error: b is not defined
  } catch (error) {
    console.log('Error:', error.message);
  }
  const b = 1;
};
noHoist();
