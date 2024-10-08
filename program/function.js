//  Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface

function Calulator(num1, num2) {
  function sum() {
    return num1 + num2;
  }

  function difference() {
    return num1 - num2;
  }

  function product() {
    return num1 * num2;
  }

  function dividend() {
    return Math.floor(num1 / num2);
  }

  return { sum, difference, product, dividend };
}

// Example
const calc12And5 = Calulator(12, 5);
calc12And5.sum(); // 17
calc12And5.difference(); // 7
calc12And5.product(); // 60
calc12And5.dividend(); // 2

//Design a private counter function which exposes increment and retrive functionalities
function privateCounter() {
  var count = 0;
  return {
    increment: function (val = 1) {
      count += val;
    },
    retrieve: function () {
      return count;
    },
  };
}

// driver code
const counter = privateCounter();
counter.increment();
counter.increment();
counter.retrieve(); // 2
counter.increment(5);
counter.increment();
counter.retrieve(); // 8

//Write a polyfill for bind function
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    var fn = this;
    var fnArgs = Array.prototype.slice.call(arguments, 1);

    return function () {
      var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));
      fn.apply(context, allArgs);
    };
  };
}

//Write a function which will create a function bounded to the context like bind, but can be overridden when the context is set explicitly
function softBind(fn, context) {
  var fnArgs = Array.prototype.slice.call(arguments, 2);

  return function () {
    var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));

    // override the context to incoming context if it is not undefined, null or window
    var finalContext = !this || this === window ? context : this;
    fn.apply(finalContext, allArgs);
  };
}

//Write a function which helps to achieve multiply(a)(b) and returns product of a and b
function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

multiply(2)(4); // 8
multiply(5)(3); // 15

//. Create a function which takes another function as an argument and makes it eligible for currying or partial application
function curryFunc(fn) {
  return function curry(...args) {
    if (args.length < fn.length) {
      return curry.bind(this, ...args);
    }
    return fn.apply(this, args);
  };
}

// driver code
let sum = curryFunc(function (a, b, c, d) {
  return a + b + c + d;
});

sum(1)(2)(3)(4); // called like curried function
sum(1, 2)(3, 4); // called like partial application

//Design a function which helps to do debouncing
function debounce(fn, delay, context) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);

    context = this ?? context;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

//Design a function which helps to do throttling
/**
The throttling function forces a function to run once in an amount of time for one or multiple calls
The function is built to limit the number of function calls to improve the performance
Throttling function design can take function (to be throttled), delay and the optional context
 */
function throttle(fn, delay, context) {
  let timer;
  let lastArgs;

  return function (...args) {
    lastArgs = args;
    context = this ?? context;

    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(context, lastArgs);
      clearTimeout(timer);
    }, delay);
  };
}

//Design an interface which limits the number of function calls by executing the function once for a given count of calls
function sampler(fn, count, context) {
  let counter = 0;

  return function (...args) {
    lastArgs = args;
    context = this ?? context;

    if (++counter !== count) return;

    fn.apply(context, args);
    counter = 0;
  };
}
