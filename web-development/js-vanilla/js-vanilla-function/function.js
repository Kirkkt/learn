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
*/

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
const functionHoistingPre = function() {
  functionDeclaration(); // I am hoisted and I replace
  function functionDeclaration() {
    console.log('I am overwritten and you no see me');
  };
  function functionDeclaration() {
    console.log('I am hoisted and I replace');
  };
};
const functionHoistingMid = function() {
  function functionDeclaration() {
    console.log('I am overwritten and you no see me');
  };
  functionDeclaration(); // I am hoisted and I replace
  function functionDeclaration() {
    console.log('I am hoisted and I replace');
  };
};
const functionHoistingPost = function() {
  function functionDeclaration() {
    console.log('I am overwritten and you no see me');
  };
  function functionDeclaration() {
    console.log('I am hoisted and I replace');
  };
  functionDeclaration(); // I am hoisted and I replace
};
const functionHoisting = function() {
  console.log('# functionHoisting');
  functionHoistingPre();
  functionHoistingMid();
  functionHoistingPost();
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

/**
  The this key word is always accessible within a function.

  By default, it binds to the global object (which is very dangerous!).

  $function.bind($this) : returns a function that binds $this to the this inside $function,
    $function itself is intact

  $function.call($this) : run $function with its this binds to $this
  */
const thisDemo = function() {
  console.log('# thisDemo');
  const dog = {
    name: 'woofy',
    bark: function() {
      console.log('woofe from', this.name);
    },
    barkEs6: () => console.log('woofees6 from', this.name),
  };
  const robot = {
    name: 'erica',
  };
  dog.bark(); // woofe from
  dog.barkEs6(); // woofees6 from, this is because the this keyword is not available in objects,
    // only functions, which means that the this in barkEs6 is still bound to the global object
  const sayName = function() {
    const a = function() {console.log('my name is', this.name);};
    setTimeout(a.bind(this), 1000);
  };
  sayName.call(dog); // my name is woofy

  const sayNameEs6 = () => console.log(this);
  sayNameEs6.call(dog); // this won't work, it returns the global object!!

  const sayNameMixed = function() {
    setTimeout(() => console.log('my namees6 is', this.name), 1000);
  };
  sayNameMixed.call(dog); // my namees6 is woofy

};
thisDemo();
