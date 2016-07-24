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

/**
  There are two ways to define a function:
    var/let/const a = function() {}; // function expression
    function a() {}; // function declaration

  The difference is, function declaration is hoisted to the top of its scope while function
  expression is not.

  When to use function declaration:
    - when you don't want to worry about the order of the functions
  When to use function expression (especially with const):
    - when you want to make it absolutely sure that you don't have function name clash
  */
const functionHoisting = function() {
  console.log('# functionHoisting');
  functionDeclaration(); // i am hoisted and I replace
  function functionDeclaration() {
    console.log('i am overwritten and you no see me');
  };
  function functionDeclaration() {
    console.log('i am hoisted and I replace');
  };
  // this won't work
  try {
    functionExpression();
  } catch (error) {
    console.log(error.message); // functionExpression is not a function
  }
  const functionExpression = function() {
    console.log('you no see me');
  };
  // this will cause a syntax error
  // const functionExpression = function() {};
}
functionHoisting();

/**
  Upon every run, all local vars inside a function are re-created, instead of reused from the last
  run.

  This feature is called closure. It also means the lifetime of local variables are forever, instead
  of only until the end of the execution.
  It also means that the same local variable can be instantiated arbitrarily many time.

  See more in closure.js
*/
const closureLocalVarLifeSpan = function() {
  console.log('# closureLocalVarLifeSpan');
  var a = function(b) {
    return function(){
      return b;
    }
  };
  console.log(a(1)()); // 1
  console.log(a(2)()); // 2
};
closureLocalVarLifeSpan();

/**
  $function.prototype.length returns the maximum number of arguments it accepts
*/
const functionDotPrototype = function() {
  console.log('# functionDotPrototype');
  console.log((function() {}).prototype.length);
};
functionDotPrototype();

/*

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
