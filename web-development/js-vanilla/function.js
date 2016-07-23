/**
  Inside each function, an object is
  */
const $arguments = function() {
  console.log('# $arguments');
  const a = function() {
    console.log(arguments instanceof Object);
  }
  a();
}
$arguments();

/*
Function <!-- {{{2 -->
--------
If a functions is called with too many arguments, the extra arguments are ignored.

If a funcitons is called with too few arguments, the missing arguments are assigned the value of
`undefined`.

There are two ways to assign a function to a variable:

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
