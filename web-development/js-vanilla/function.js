/**
  Inside each function, arguments.callee returns the function itself.
  */
const argumentsCallee = function() {
  console.log('# argumentsCallee');
  const a = function() {
    if (arguments[0] === 'I am callee') {
      console.log(arguments[0]);
    } else {
      console.log('arguments.callee', arguments.callee);
      arguments.callee('I am callee');
    }
  }
  a();
  // arguments.callee {function a}
  // I am callee
}
argumentsCallee();

/**
  argument.length return the length of the actual argument list
  */
const argumentsLength = function() {
  console.log('# argumentsLength');
  const a = function() {
    console.log(arguments.length);
  };
  a(1); // 1
  a([1, 2]); // 1
  a(0, '', null, [], {}, false, undefined); // 7
};
argumentsLength();

/**
  arguments[n] return the (n+1)th argument, if n is too large, it returns undefined
  */
const argumentsN = function() {
  console.log('# argumentsN');
  const a = function() {
    console.log(arguments[2]);
  };
  a(); // undefined
  a(0, 1, 2, 3); // 2
};
argumentsN();

/*

function.apply(context, ['array', 'of', 'arguments'])
and
function.call(context, 'argument0', 'argument1', 'argument2'])
do the same thing, but in different forms, context specifies what `this` is inside the function scope

the `this` keyword belongs to a function

Function <!-- {{{2 -->
--------

    var a = function() {}; // way 1
    function a() {}; // way 2

There is a difference in that the latter is automatically moved to the top of its scope by the
JavaScript compiler. This can be dangerous.

Upon every run, all local vars inside a function are re-created, instead of reused from the last
run.

    var a = function(b) {
      return function(){
        return b;
      }
    };
    console.log(a(1)()); // 1
    console.log(a(2)()); // 2

This feature is called closure. It also means the lifetime of local variables are forever, instead
of until the end of the execution.

Function.prototype.length returns number of argument it accepts.

In ES6, `...varialbe` is used so that we no longer need `arguments`.

    // prior to ES6
    var a = function() {
      console.log(arguments);
    };
    a(1,2,3); // [1, 2, 3]

    // ES6
    'use strict';
    var a = function(...all) {
      console.log(all);
    };
    a(1,2,3); // [1, 2, 3]

    'use strict';
    var a = function(first, second, ...rest) {
      console.log(first, second, rest);
    };
    a(1,2,3); // 1 2 [3]
*/
