- All the values false , undefined , ‘ ’, 0 , NaN represent falsy values in javascript

- All the values {},[].true, a number , non empty strings represent truthy values in javascript

- The data variable is set to a non empty string and thus is considered to be true

- What is the type of variable data declared below const data=[ ]? -> number

- An object is an unordered collection of properties each of which has a name and value

- Both new keyword and object.create() can be used to create new objects in javascript

- An object’s prototype is a reference to another object from which properties are inherited

  - prototype: This is a property of constructor functions. When you create an object via new, the constructor’s prototype property becomes the [[Prototype]] of the new object.

  - **proto**: This is an actual reference from one object to another (its prototype), representing the [[Prototype]] internally.

  ```javascript
  function Animal(name) {
    this.name = name;
  }

  // Adding a method to the prototype of Animal
  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
  };

  const dog = new Animal("Dog");
  dog.speak(); // Output: "Dog makes a sound."
  ```

- Once the continue keyword is invoked it ignores the rest of the statements below it and continues the loop

- The break statement is used to move out of the loop

- for(let i=1; ;i++) { Let data= i\*5; console.log(data) if(data>=30) break; } -> The loop will run till i=6 after which the loop will break as data becomes equal to 30

- In javascript spread operator allows an iterable to be expanded to be expanded in places where 0 or more arguments/key-value pairs are expected

- concat method in strings is used to concatenate two strings

- The push method is used to insert a new element at the end of an array

- The pop() method in JavaScript is used the remove the last element of the array. Hence the answer is option B.

- pop() method removes the last element of the array

- sort() method is used to sort an array

- slice() method creates a new array starting from start index and finishing at end-1 index

- The filter() method will return all values in arr which are not equal to 3.

- Set data structure is used to store only the unique values present in the input

  ```javascript
  arr=new Set([1,2,2,3,3,4,4,4,4,5,6]) console.log(arr)
  ```

- findIndex() method returns the index of the first element that passes the condition

- A function that receives another function and returns a new function or both
- Functions are treated as simply values
- Stores functions in variables and properties
- Returns functions from functions

- bind:bind an object to a common function, so that the function gives different result when its need

- What will be the output of the following code:

  ```javascript
  let geeks = {
    name: "ABC",
    printFunc: function () {
      console.log(this.name);
    },
  };

  let printFunc2 = geeks.printFunc;

  printFunc2(); //"No output"
  ```

  ```javascript
  let geeks = {
    name: "ABC",
    printFunc: function () {
      console.log(this.name);
    },
  };

  let printFunc2 = geeks.printFunc;

  printFunc2(); //"No output"
  ```

  ```javascript
  var geeks = {
    name: "ABC",
    printFunc: function () {
      console.log(this.name);
    },
  };

  var printFunc2 = geeks.printFunc.bind(geeks); //"No output"
  ```

- The bind() method creates a new function where this keyword refers to the parameter in the parenthesis.

- The bind() method creates a new function where this keyword refers to the parameter in the parenthesis in the above case geeks. This way the bind() method enables calling a function with a specified this value.

- IIFE stands for Immediately Invoked Functions Expressions

- IIFEs have their own scope i.e. the variables you declare in the Function Expression will not be available outside the function.
- Similar to other functions IIFEs can also be named or anonymous, but even if an IIFE does have a name it is impossible to refer/invoke it.
- IIFEs can also have parameters

  - IIFEs have their own scope: Variables inside the IIFE do not affect or interact with variables outside the IIFE, making them a great tool to avoid polluting the global scope.

  ```javascript
  (function () {
    var x = 10; // x is only available inside this IIFE
    console.log(x); // Output: 10
  })();

  console.log(x); // Error: x is not defined (because x is confined to the IIFE's scope)
  ```

  - Named or Anonymous IIFEs: IIFEs can have names, but even if they are named, they cannot be invoked from outside. The name only exists inside the IIFE itself, which can be useful for recursion or debugging.

  ```javascript
  (function myIIFE() {
    console.log("This is a named IIFE");
  })();

  myIIFE(); // Error: myIIFE is not defined
  ```

  - Recursion: If you need the IIFE to call itself (for recursion purposes), a named IIFE is helpful.

  ```javascript
  (function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // Recursively calls the named IIFE
  })(5); // Output: 120
  ```

- features of javascript dynamic, single threaded, garbase collection

- In js high level refers as Developers don't need to manage resources manually. Everything happens automatically.

- In js garbage collection refers to the Mechanism in js which automatically removes unnecessary things from the memory

- The javascript engine is simply a program that runs the javascript code

- Call stack refers to the place where code is executed using execution context

- Heap refers to the place where objects are stored

- Compilation is the process where source code is converted to machine code and then to binary code after which the file is executed by the computer

- Interpretation means running the source code line by line and executing each line one by one

- jvascript uses a mix of interpretation and compilation

- Event handlers are a type of functions
- An event handler is invoked by the browser when that specified event occurs
- Type specifies the property of an event
- Events related to the browser window can be handled by Window
- scroll event is fired every time while scrolling a scrollable document element
- Mouse drags in a browser can be handled using mousedown handler.
- Focus and blur events falls under window events.

- Unbind method is used to remove a binding of an element.
