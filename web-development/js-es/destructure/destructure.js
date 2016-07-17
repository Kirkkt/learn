/*
 * simple object destructure
 */
// bad, old fashion
const simpleObjectDestructure_bad = user => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  return `The name is ${firstName} ${lastName}`;
};
// good, primitive object destructure
const simpleObjectDestructure_good = user => {
  const { firstName: first, lastName: last } = user;
  return `The name is ${first} ${last}`;
};
// better, key assignment can be simplified if the variables are the same as the object keys
const simpleObjectDestructure_better = user => {
  const { firstName, lastName } = user;
  return `The name is ${firstName} ${lastName}`;
};
// best, object destructure directly in the arguments
const simpleObjectDestructure_best =
  ({firstName, lastName}) => `The name is ${firstName} ${lastName}`;
const simpleObjectDestructure = () => {
  const user = {
    firstName: 'Jason',
    lastName: 'Bourne',
    genderIsMale: true,
    title: 'special agent',
  };
  console.log(simpleObjectDestructure_bad(user));
  console.log(simpleObjectDestructure_good(user));
  console.log(simpleObjectDestructure_better(user));
  console.log(simpleObjectDestructure_best(user));
};
simpleObjectDestructure();

/*
 * missing keys in object destructure
 * missing keys will be treated as undefined
 */
const missingKeysInObjectDestructure = () => {
  const {a, b, c, e: d, d: e} = {a: 1, b: 2, e: 5};
  console.log('a', a); // 1
  console.log('b', b); // 2
  console.log('c', c); // undefined
  console.log('d', d); // 5
  console.log('e', e); // undefined
  /* Uncaught ReferenceError: f is not defined
  console.log('f', f);
  */
};
missingKeysInObjectDestructure();

/*
 * watch out for ambiguous curly brackets
 * add parentheses when necessary
 */
const watchOutForAmbiguousCurlyBrackets = () => {
  // Valid syntax
  let a, b, c;
  ({a, b, c} = {a:1, b:2, c:3});
  console.log('a', a, 'b', b, 'c', c);
  /* Invalid syntax!
  var a, b, c;
  {a, b, c } = {a:1, b:2, c:3};
  */
};
watchOutForAmbiguousCurlyBrackets();


/*
 * ignore uninteresting fields using object destructure
 */
const ignoreUninterestingFields = () => {
  const obj = {
    a: 'a',
    b: 'b',
  };
  let {a} = obj;
  console.log(a);
};
ignoreUninterestingFields();

/*
 * function argument with object destructure
 */
// terrible, easily turn into argument party
const functionArgumentWithObjectDestructure_terrible = (size, cords, radius) => {
  size = size || 0;
  cords = cords || 1;
  radius = radius || 2;
  console.log(size, cords, radius);
}
// bad, old fashion
const functionArgumentWithObjectDestructure_bad = (configuration) => {
  let size = configuration.size || 0;
  let cords = configuration.cords || 1;
  let radius = configuration.radius || 2;
  console.log(size, cords, radius);
}
// good, object destructure in argument field, with default values
const functionArgumentWithObjectDestructure_good =
  ({size: size = 0, cords: cords = 1, radius: radius = 2}) => {
    console.log(size, cords, radius);
  };
// better, even handles empty argument (undefined)
const functionArgumentWithObjectDestructure_best =
  ({size: size = 0, cords: cords = 1, radius: radius = 2} = {}) => {
    console.log(size, cords, radius);
  };
const functionArgumentWithObjectDestructure = () => {
  // notice here we can't just leave the second argument blank
  // e.g. this won't work:
  // functionArgumentWithObjectDestructure_terrible(, 5);
  functionArgumentWithObjectDestructure_terrible(undefined, 5);
  functionArgumentWithObjectDestructure_bad({cords: 5});
  functionArgumentWithObjectDestructure_bad({});
  functionArgumentWithObjectDestructure_good({cords: 5});
  functionArgumentWithObjectDestructure_good({});
  // calling good with empty argument list won't work, since it's expecting an object
  try {
    functionArgumentWithObjectDestructure_good();
  } catch(e) {
    console.log(e); // TypeError: Cannot match against 'undefined' or 'null'.
  }
  functionArgumentWithObjectDestructure_best({cords: 5});
  functionArgumentWithObjectDestructure_best();
};
functionArgumentWithObjectDestructure();

/*
 * nested function argument with object destructure
 */
// bad, we don't care about everything in the object
const nestedFunctionArgumentWithObjectDestructure_bad = user => {
  console.log(user.displayName, 'is', user.fullName.firstName);
};
const nestedFunctionArgumentWithObjectDestructure_good =
  ({displayName, fullName: {firstName: name}}) => {
    console.log(displayName + " is " + name);
  };
const nestedFunctionArgumentWithObjectDestructure = () => {
  const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
  };
  nestedFunctionArgumentWithObjectDestructure_bad(user);
  nestedFunctionArgumentWithObjectDestructure_good(user);
};
nestedFunctionArgumentWithObjectDestructure();

/*
 * string variable as key in object destructure
 */
const stringVariableAsKeyInObjectDestructure = () => {
  const key = 'mykey';
  const { [key]: value } = { mykey: 'myvalue' };
  console.log(value); // myvalue
};
stringVariableAsKeyInObjectDestructure();

/*
 * simple array destructure
 */
// bad, old fashion
const simpleArrayDestructure_bad = (arr) => {
  const first = arr[0];
  const second = arr[1];
  // do something with them
  return first + second;
};
// good, array destructure
const simpleArrayDestructure_good = (arr) => {
  const [first, second] = arr;
  // do something with them
  return first + second;
};
const simpleArrayDestructure = () => {
  const arr = [1, 20, 300, 4000];
  console.log('the sum of the first two is', simpleArrayDestructure_bad(arr));
  console.log('the sum of the first two is', simpleArrayDestructure_good(arr));
};
simpleArrayDestructure();

/*
 * missing indexes in array destructure
 * missing indexes will be treated as undefined
 */
const missingKeysInArrayDestructure = () => {
  const [a, b, , c] = [1, 2, 3];
  console.log('a', a); // 1
  console.log('b', b); // 2
  console.log('c', c); // undefined
};
missingKeysInArrayDestructure();

/*
 * skip values in array destructure
 */
// bad had to define a useless local varialbe
const skipValuesInArrayDestructure_bad = (arr) => {
  const [first, _, third] = arr;
  return first + third;
};
// simply skip that value
const skipValuesInArrayDestructure_good = (arr) => {
  const [first, , third] = arr;
  return first + third;
};
const skipValuesInArrayDestructure = () => {
  const arr = [1, 20, 300, 4000];
  console.log('the sum of the first and the third is', skipValuesInArrayDestructure_bad(arr));
  console.log('the sum of the first and the third is', skipValuesInArrayDestructure_good(arr));
};
skipValuesInArrayDestructure();

/*
 * use array destructure to swap values
 */
// bad, old fashion
const swapValuesWithArrayDestructure_bad = () => {
  let a = 0;
  let b = 'pumpkin';
  console.log('a', a, 'b', b);
  [a, b] = [b, a];
  console.log('a', a, 'b', b);
};
// good, array destructure through and through
const swapValuesWithArrayDestructure_good = () => {
  let [a, b] = [0, 'pumpkin'];
  console.log('a', a, 'b', b);
  [a, b] = [b, a];
  console.log('a', a, 'b', b);
};
const swapValuesWithArrayDestructure = () => {
  swapValuesWithArrayDestructure_bad();
  swapValuesWithArrayDestructure_good();
};
swapValuesWithArrayDestructure();

/*
 * simple for-of loop with array destructure
 */
// bad, old fashion
const simpleForOfLoopWithArrayDestructure_bad = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
// good, with forEach
const simpleForOfLoopWithArrayDestructure_good = (arr) => {
  arr.forEach(item => {
    console.log(item);
  });
};
// better, with for-of look
const simpleForOfLoopWithArrayDestructure_better = (arr) => {
  for(const item of arr) {
    console.log(item);
  }
};
const simpleForOfLoopWithArrayDestructure = () => {
  const arr = [1, 20, 300, 4000];
  simpleForOfLoopWithArrayDestructure_bad(arr);
  simpleForOfLoopWithArrayDestructure_good(arr);
  simpleForOfLoopWithArrayDestructure_better(arr);
};
simpleForOfLoopWithArrayDestructure();

/*
 * object destructure in for-of loop
 */
// bad, we don't care about everything in the object
const objectDestructureInForOfLoop_bad = (users) => {
  for (const user of users) {
    console.log('name', user.name, 'father', user.family.father);
  }
};
// good, we can simply use object destructure in the for-of loop iterator
const objectDestructureInForOfLoop_good = (users) => {
  for (const {name, family: {father}} of users) {
    console.log('name', name, 'father', father);
  }
};
const objectDestructureInForOfLoop = () => {
  const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    }
  ];
  objectDestructureInForOfLoop_bad(people);
  objectDestructureInForOfLoop_good(people);
};
objectDestructureInForOfLoop();

/*
 * Nested object and array destructuring
 */
const nestedObjectAndArrayDestructure = () => {
  const metadata = {
      title: "Scratchpad",
      translations: [
         {
          locale: "de",
          localization_tags: [ ],
          last_edit: "2014-04-14T08:43:37",
          url: "/de/docs/Tools/Scratchpad",
          title: "JavaScript-Umgebung"
         }
      ],
      url: "/en-US/docs/Tools/Scratchpad"
  };
  const {
    title: englishTitle,
    translations: [{
      title: localeTitle
    }]
  } = metadata;
  console.log('englishTitle', englishTitle); // Scratchpad
  console.log('localeTitle', localeTitle);  // JavaScript-Umgebung
};
nestedObjectAndArrayDestructure();

/*
 * Prefer returning objects to returning arrays as return value, because it is better to use object
 * destructure to extract values based on their keys, than to use array destrcuture to extract
 * values based on their indexes (orders).
 */
// bad, the caller has to remember the ordering, future changes are breakge-prone
const returnObjectsOverArrays_bad = () => [20, 10, 20, 0];
// good, the caller can use object destructure based on keys to extract, more robust
const returnObjectsOverArrays_good = () => {
  return {
    left: 20,
    top: 10,
    right: 20,
    bottom: 0
  }
};
const returnObjectsOverArrays = () => {
  // fields we don't care about can be omitted, so that's kind of good
  const [left_bad, , right_bad] = returnObjectsOverArrays_bad()
  console.log('left', left_bad, 'right', right_bad)
  // and yet better, just use object destructure
  const {left, right} = returnObjectsOverArrays_good()
  console.log('left', left, 'right', right)
};
returnObjectsOverArrays();
