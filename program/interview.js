/*
What is JavaScript?

JavaScript is a high-level, dynamic, interpreted, and object-oriented programming language used for adding interactivity to web pages, server-side scripting, and more.

*/

/*
what is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js allows you to run JavaScript on the server.
Node.js also provides library of various JavaScript modules which helps to develop web applications.
Node.js was developed by Ryan Dahl in 2009.
Node js is not a language or a framework. 
*/

/*
What are data types in JavaScript?

Primitive: String, Number, Boolean, Undefined, Null, Symbol, BigInt.
Non-primitive: Object (includes arrays and functions).
*/

/*
Explain == vs ===.

== checks for equality with type coercion.
=== checks for strict equality without type coercion.

*/

/*

What is an Immediately Invoked Function Expression (IIFE)?

IIFE is a function that runs as soon as it is defined.

(function() {
  console.log("IIFE");
})();

*/

/*
What is the difference between null and undefined?

null is an intentional absence of a value.
undefined means a variable has been declared but not assigned a value.
*/

/*
What is closure?

A closure is a function that remembers its lexical scope even when executed outside that scope.
*/

/*
Explain event delegation.

Event delegation is a technique where a single event listener is attached to a common ancestor, allowing events to be handled for multiple children.

*/

/*
What is a prototype?

Every JavaScript object has a prototype property, allowing properties and methods to be shared among all instances.

exmple:
object.prototype.name = "value";

*/

/*
What are promises?

Promises represent asynchronous operations, providing then, catch, and finally methods to handle success, failure, and completion.

*/

/*
What is hoisting?

Hoisting is JavaScript's default behavior of moving declarations (var, function) to the top of their scope before execution.

*/

/*
What is an arrow function?

An arrow function is a concise way of writing functions using =>. It doesn't have its own this, arguments, or prototype.
*/

/*
How to select an element by ID?

document.getElementById("id")

*/

/*
What is event.preventDefault()?

event.preventDefault() is used to prevent the default behavior of an event, such as form submission or link navigation.

*/

/*
What is event.stopPropagation()?

Stops the event from propagating to parent elements.

*/

/*
What is NaN?

Not-a-Number," a special value that represents an invalid number operation.
*/

/*
What is the difference between slice and splice with exmple?

slice: Returns a shallow copy of a portion of an array.
splice: Modifies the array by removing or replacing elements.

example:

const arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // Output: [2, 3]
arr.splice(1, 2); // Output: [2, 4, 5]


*/

/*
Explain map, filter, and reduce.

map: Transforms an array by applying a function.
filter: Filters elements based on a condition.
reduce: Reduces an array to a single value using a reducer function.

*/

/*
Explain event bubbling and capturing.

Event bubbling: Event starts from the target element and bubbles up.
Event capturing: Event starts from the outer element and captures down to the target.

*/

/*
What is memoization?

Caching the results of expensive function calls to improve performance.
*/

/*
Explain currying.

Transforming a function that takes multiple arguments into a sequence of functions, each with a single argument.
*/

/*
How does the event loop work?

The event loop manages asynchronous callbacks, executing them when the call stack is empty.
*/

/*
What are template literals?

Strings enclosed in backticks, allowing expressions with ${}.
*/

/*
Difference between synchronous and asynchronous code?

Synchronous: Code executes line-by-line.
Asynchronous: Code runs independently, allowing other operations to proceed.
*/

/*
Explain JSON.stringify and JSON.parse.

JSON.stringify: Converts an object to a JSON string.
JSON.parse: Converts a JSON string back to an object.
*/

/*
What is the typeof operator?

Returns the data type of a variable as a string.
*/

/*
Explain deep vs shallow copy.

Shallow copy: Copies only the top-level properties.
Deep copy: Copies all levels of nested objects.

*/

/*
What is the new keyword?

Creates an instance of a constructor function.
*/

/*
What is the instanceof operator?

Checks if an object is an instance of a constructor.
*/

/*
Explain call stack and memory heap.

Call stack: Manages function invocation.
Memory heap: Stores variables and object data.

*/

/*
// Explain the concepts of call, apply, and bind in JavaScript. Provide examples.
const person = { name: "Alice" };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

greet.call(person, "Hello");
greet.apply(person, ["Hii!!"]);

const boundGreet = greet.bind(person);
boundGreet("Hey");


call: Calls a function with a specific this context and arguments provided individually.
apply: Calls a function with a specific this context and arguments as an array.
bind: Returns a new function with a specific this context, and optionally binds arguments.
*/

/*
//Explain the difference between let, const, and var in JavaScript.

var: Function-scoped, can be redeclared and updated.
let: Block-scoped, can be updated but not redeclared.
const: Block-scoped, cannot be updated or redeclared.

function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20; // This reassigns the existing variable 'x'
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20 (not 10)
}



function exampleLet() {
  let y = 30;
  if (true) {
    let y = 40; // This creates a new block-scoped variable 'y'
    console.log(y); // Output: 40
  }
  console.log(y); // Output: 30 (not affected by the inner 'y')
}

function exampleConst() {
  const z = 50;
  // z = 60;  // Error: Assignment to a constant variable
  console.log(z); // Output: 50
}
*/

/*
//What is a closure in JavaScript? Provide an example.
function outer() {
  const message = "Hello";
  function inner() {
    console.log(message);
  }
  return inner;
}

const innerFunc = outer();
innerFunc(); // Output: 'Hello'
*/

/*
What is event delegation in JavaScript?

=> Event delegation is a technique where a single event listener is attached to a common ancestor, allowing events to be handled for multiple children.


*/

/*
What is the difference between == and === in JavaScript?

== checks for equality with type coercion, while === checks for strict equality without type coercion.

*/

/*
 What is the purpose of the async and await keywords in JavaScript?

 async and await are features introduced in ES2017 (ES8) that make working with asynchronous code more readable and easier to manage. They are built on top of promises.

 async functions return promises. await pauses execution until the promise resolves or rejects.

 async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

 Difference from .then()

 .then() is used with promises and is chaining-based, where each .then() function returns a promise and allows you to chain further operations.

await, on the other hand, allows for more synchronous-like code within async functions, making asynchronous code appear more linear and readable.

In summary, async and await make asynchronous code look and behave more like synchronous code, enhancing readability and maintainability, especially when dealing with promises.
*/

/*
Explain what the this keyword refers to in JavaScript.

this keyword refers to an object.
The this keyword refers to different objects depending on how it is used
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
*/

/*
 What is a promise in JavaScript? Provide an example of creating and using a promise.

A promise is an object that represents the eventual completion or failure of an asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 2000);
});
 
myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

*/

/*
What is a callback function in JavaScript? Provide an example.

callback functions are functions that are passed as arguments to other functions.

function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched!');
  }, 2000);
}
 
fetchData((data) => {
  console.log(data);
});

*/

/*
 What is the difference between null and undefined in JavaScript?

null represents the intentional absence of a value, while undefined represents an uninitialized variable.

example
const myVar = null;
console.log(myVar); // Output: null

const myVar;
console.log(myVar); // Output: undefined

*/

/*
 What is event bubbling in JavaScript?

Event bubbling is the process by which an event is bubbled up from the target element to the parent element.

what is event capturing in JavaScript?

Event capturing is the process by which an event is captured perent element to the target element.

*/

/*
What is event.preventDefault()? Provide an example of its usage.

Description: event.preventDefault() is used to prevent the default behavior of an event, such as form submission or link navigation.

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', event => {
  event.preventDefault(); // Prevents form submission
  console.log('Form submission prevented.');
});

*/

/*
What are arrow functions in JavaScript? Provide an example.

const add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5

*/

/*
What is the purpose of the localStorage and sessionStorage objects in JavaScript?

localStorage and sessionStorage are objects that are used to store data in the browser's local storage.

They provide a way to store key-value pairs in a web browser, with localStorage persisting even after the browser is closed and reopened, and sessionStorage existing only for the duration of the page session.
*/

/*

Explain event handling in JavaScript and provide an example of attaching an event listener.

const button = document.getElementById('myButton');
 
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

*/

/*
 What is the difference between map() and forEach() array methods in JavaScript?

 map() returns a new array with the results of a function applied to each element, while forEach() only iterates over the array and does not return a new array.

 

*/
/*
What is a RESTful API and how do you make a GET request using JavaScript?

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
*/

/*
What is the purpose of the use strict directive in JavaScript?

// Without "use strict"
function withoutStrict() {
  variable = 10;  // This will create a global variable accidentally
  console.log(variable);
}
 
withoutStrict();  // Output: 10
 
// With "use strict"
function withStrict() {
  'use strict';
  variable = 20;  // This will throw a ReferenceError
  console.log(variable);
}
 
withStrict();  // Error: variable is not defined

*/

/*
Explain hoisting in JavaScript.

console.log(x);  // Output: undefined
var x = 10;
console.log(x);  // Output: 10

*/

/*
what is different between push, pop, shift, and unshift in JavaScript?

push() adds an element to the end of an array.
pop() removes the last element from an array.
shift() removes the first element from an array.
unshift() adds an element to the beginning of an array.

*/

/*
 How do you handle errors in JavaScript? Provide an example of using a try...catch block.

 try {
  // Code that may throw an error
  const result = 10 / 0;
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

*/

//coding

/*
Reverse a string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

*/

/*
Find the factorial of a number.

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

*/

/*
Check if a number is prime.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
*/

/*
Fibonacci sequence using recursion.

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

/*
Check if a string is a palindrome.

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

*/

/*
How to create an element dynamically?

const element = document.createElement('div');
element.textContent = 'Hello';
document.body.appendChild(element);

*/

/*

How to remove an element?

const element = document.getElementById('id');
element.remove();

*/

/*
Filter even numbers from an array.

const evens = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);

*/

/*
Find the maximum number in an array.

const max = Math.max(...[1, 2, 3, 4, 5]);
*/

/*
How to merge two arrays?

const merged = [...array1, ...array2];
*/

/*
Check if an array includes a value.
array.includes(value);

*/

/*
How to deep clone an object?

const clone = JSON.parse(JSON.stringify(obj));
*/

/*
Flatten an array

const flat = arr.flat(Infinity);
*/

/*
Remove duplicates from an array.
const unique = [...new Set(array)];

*/

/*

Find the intersection of two arrays.


function findIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const intersection = findIntersection(array1, array2);

console.log(intersection); // Output: [3, 4, 5]


*/

/*
Debounce a function.

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer); // Clear the previous timer
    timer = setTimeout(() => fn(...args), delay); // Set a new timer
  };
}

// Example usage
const handleResize = debounce(() => {
  console.log('Resized!');
}, 500);

window.addEventListener('resize', handleResize);

*/

/*
Throttle a function.

function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}


*/
