1.  **What is Node.JS?**

    - nodejs is an open-source, cross-platform, built javascript runtime. it is allow you javascript code outside of browser and typiclly on server. it is used v8 engine for execute quickly and effecintly. nodejs is single thread, non blocking IO operation by offloading heavy tasks to a thread pool and managing their callbacks through an event queue, handle multiple asynchronous operations efficiently without blocking the main thread.

    Node.js is:

        A JavaScript Runtime:

        Node.js is a runtime environment that allows you to execute JavaScript code outside of a browser, on the server-side. It uses the V8 JavaScript engine (from Google Chrome) to run JavaScript code.


        Event-Driven:

        Node.js uses an event-driven architecture, meaning it responds to various events asynchronously. This makes it ideal for building applications that require real-time updates (like chat applications, streaming, or gaming servers).

        Non-Blocking and Asynchronous:

        Node.js uses a non-blocking I/O model, meaning it doesn’t wait for tasks (such as file reads or database queries) to complete before moving to the next one. This allows Node.js to handle multiple operations simultaneously, making it highly efficient for I/O-heavy operations.

        Single-Threaded but Supports Concurrency:

        Node.js operates on a single thread using an event loop to handle multiple concurrent requests. While it runs in a single-threaded environment, it can handle multiple tasks simultaneously due to its non-blocking I/O model.

        Built for Scalable Network Applications:

        Node.js excels at building scalable applications, particularly those that involve handling many connections at once, such as web servers, APIs, and real-time applications (like chat and video conferencing).

        Cross-Platform:

        Node.js is cross-platform, meaning it can run on different operating systems like Windows, macOS, and Linux.

2.  **Why Node.JS?**

    - Easy to Get Started
    - Scalability
    - Real-Time Web Apps
    - Fast Suite
    - Unified Language
    - Rich Ecosystem

3.  **Basic Concepts of Node.JS**

    ![eventloop]("https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp")

4.  **Advantages of Node.JS**

    - Easy Scalability
    - Real-time web apps
    - Fast Suite
    - Easy to learn and code
    - Advantage of Caching

5.  **Common Use Cases of Node.JS**

    - Web Servers
    - APIs and Microservices
    - Real-Time Applications
    - Single-Page Applications
    - Streaming Services

6.  **Node.JS Ecosystem**

    - npm (Node Package Manager)
    - Express.js
    - Socket.io
    - Mongoose

7.  **Key features of Node.js**

    - Non-blocking I/O
    - Event-driven architecture
    - Extensive module ecosystem
    - Single-threaded Model

8.  **Core Modules**

    - fs (File System): Read/write files and directories
    - http: Create HTTP servers and clients
    - path: Manipulate file paths.
    - events: Implement custom event handling.

9.  **Datatypes in Node.js**

    - Boolean
    - Undefined
    - Null
    - String
    - Number

    ```javascript
    // Variable store number data type
    let a = 35;
    console.log(typeof a);

    // Variable store string data type
    a = "GeeksforGeeks";
    console.log(typeof a);

    // Variable store Boolean data type
    a = true;
    console.log(typeof a);

    // Variable store undefined (no value) data type
    a = undefined;
    console.log(typeof a);
    ```

    - Objects and Functions:

    ```javascript
    let company = {
      Name: "GeeksforGeeks",
      Address: "Noida",
      Contact: "+919876543210",
      Email: "abc@geeksforgeeks.org",
    };

    // Display the object information
    console.log("Information of variable company:", company);

    // Display the type of variable
    console.log("Type of variable company:", typeof company); //object
    ```

    ```javascript
    function multiply(num1, num2) {
      // It returns the multiplication
      // of num1 and num2
      return num1 * num2;
    }

    // Declare variable
    let x = 2;
    let y = 3;

    // Display the answer returned by
    // multiply function
    console.log("Multiplication of", x, "and", y, "is", multiply(x, y)); //6
    ```

10. **String and String Functions in Node.js**

    ```javascript
    let x = "Welcome to GeeksforGeeks ";

    let y = "Node.js Tutorials";

    let z = ["Geeks", "for", "Geeks"];

    console.log(x); //Welcome to GeeksforGeeks

    console.log(y); //Node.js Tutorials

    console.log("Concat Using (+) :", x + y); //Welcome to GeeksforGeeks Node.js Tutorials

    console.log("Concat Using Function :", x.concat(y)); //Welcome to GeeksforGeeks Node.js Tutorials

    console.log("Split string: ", x.split(" ")); //[ 'Welcome', 'to', 'GeeksforGeeks', '' ]

    console.log("Join string: ", z.join(", ")); //Geeks, for, Geeks

    console.log("Char At Index 5: ", x.charAt(5)); //m
    ```

11. **Buffer in Node.js**

    ```javascript
    let b = new Buffer(10000); //creates buffer
    let str = " ";
    b.write(str);
    console.log(str.length); //Display the information
    console.log(b.length); //Display the information
    ```

12. **Creating Console-based Node Application**

    - Example 1: Hello World application using Node.js.

    ```javascript
    console.log("Hello World");
    ```

    - Example 2: Hello World application Receiving the User Input

    ```javascript
    //in command lines node GK2.js Hello World
    console.log(process.argv.slice(2)); //["Hello", "World"]
    ```

13. **Steps to Create Node Application (Web-Based)**

    **Step 1:** Import required modules

    ```javascript
    var http = require("http");
    ```

    **Step 2:** Creating a server in Node

    ```javascript
    http.createServer().listen(8080);
    ```

    **step 3** Step 3: Read request and return response in Node:

    ```javascript
    http.createServer(function (request, response) {...}).listen(8080);
    ```

    ```javascript
    // Require http header
    var http = require("http");

    // Create server
    http
      .createServer(function (req, res) {
        // HTTP Status: 200 : OK
        // Content Type: text/html
        res.writeHead(200, { "Content-Type": "text/html" });

        // Send the response body as "Hello World!"
        res.end("Hello World!");
      })
      .listen(8080);
    ```

14. **Node.js REPL (READ, EVAL, PRINT, LOOP)**

    - The Node.js REPL (Read, Eval, Print, Loop) is an interactive shell that allows you to run JavaScript and Node.js code in real time.

      **1. Read:** read the user input, which can be javascript expression or statements.
      **2. Eval:** input then evaluation(execution) by nodejs engine.  
       **3. Print:** result of evaluation print out
      **4. Loop** The process repeats, waiting for the next input.

15. **Features of the Node.js REPL:**

    - **Immediate Execution:** You can type JavaScript code directly, and it gets executed immediately.
    - **Access to Node.js Core Modules:** You can use Node.js built-in modules (e.g., fs, http) directly within the REPL.
    - **Variable and Function Persistence:** Any variables or functions you define in the REPL session are persisted throughout the session until you exit.
    - **Multi-line Inputs:** For writing more complex, multi-line code, the REPL allows continuation lines.
    - **Underscore \_:** The last evaluated expression’s result is stored in the special variable \_, making it easy to reuse.
    - **Command Shortcuts:** You can use special REPL commands like .help, .exit, .save, .load, etc.

    ```bash
    $ node
    > 2 + 2
    4
    > let x = 10;
    undefined
    > x * 3
    30
    > _
    30
    ```

16. **Node.js NPM (Node Package Manager)**

    **_1. Facts about NPM:_**

    - Largest software registry
    - Manages dependencies
    - Two main parts

    **_2. Installing NPM_**

    - NPM is installed automatically when you install Node.js.
    - You can download and install Node.js (which includes NPM) from the official website: Node.js Downloads.

    **_3. Checking and Updating NPM Version:_**

    - npm -v
    - update NPM to the latest version: npm install -g npm

    **_4. Creating a Node Project_**

    - Create a new directory for your project:

    ```bash
    mkdir my-node-project
    cd my-node-project
    ```

    - Initialize a new Node.js project using the following command: npm init

    - This will prompt you to enter details about the project (name, version, description, etc.). To skip the prompts, use npm init -y, which uses default values and creates a package.json file.

    **_5. Installing Packages:_**

    - To install a package locally (specific to your project), use: npm install <package-name>

    - npm install express

    - This creates a node_modules/ folder and adds the installed package to the package.json file under dependencies.

    **_6. Using a Package in Node:_**

    - After installing a package, you can import it in your project using require() (or import if using ES modules).

    ```javascript
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
    ```

    **_7. Installing a Package Globally:_**

    - To make a package accessible from anywhere on your system, install it globally:

    ```bash
    npm install -g <package-name>
    ```

    - For example, to install nodemon globally (a tool that automatically restarts Node.js apps when files change):

    ```bash
    npm install -g nodemon
    ```

    - You can then run nodemon directly from the command line.

    **_8. Controlling Where the Package Gets Installed:_**

    - By default, npm install installs packages in the current directory under node_modules/. If you use the -g flag, it installs the package globally, typically in a system-wide directory.

    - To change the default global installation directory:

      1. Create a directory for global packages:

      ```bash
      mkdir ~/.npm-global
      ```

      2. Configure npm to use the new directory:

      ```bash
      npm config set prefix '~/.npm-global'
      ```

      3. Add the new directory to your system’s PATH.

    **_9. Save Directory of Installed Modules:_**

    - When you install a package, npm creates a node_modules/ directory in your project. You can check the exact path of installed packages with:

    ```bash
    npm list
    ```

    - It displays the hierarchy of installed packages along with their version numbers.

    ```bash
    npm list -g
    ```

    **_10. Uninstalling Packages:_**

    - npm uninstall <package-name>
    - npm uninstall express

    - This removes the package from node_modules/ and also from package.json if it was listed under dependencies.

    **_11. Using Semantic Versioning to Manage Packages:_**

    - NPM uses Semantic Versioning (SemVer) to manage package versions. SemVer follows the format MAJOR.MINOR.PATCH

      - Major: Breaking changes (e.g., 2.0.0 → 3.0.0)
      - Minor: New features (e.g., 2.0.0 → 2.1.0)
      - Patch: Bug fixes (e.g., 2.0.0 → 2.0.1)

    - When you specify dependencies in package.json, you can use symbols to indicate which versions to allow:

      - ^1.2.3: Compatible with 1.x.x (includes patch and minor updates).
      - ~1.2.3: Allows updates for the last digit (only patch updates).
      - 1.2.3: Only this exact version.

    ```bash
    "dependencies": {
        "express": "^4.17.1"
    }
    ```

    !["Semantic Versioning"]("https://media.geeksforgeeks.org/wp-content/uploads/semantic.png")

17. **Node.js Global Objects**

    - In Node.js, global objects are objects that are available in all modules, meaning you don't need to require them or import them. They are similar to browser global objects like window

    **_1. global_**

    - global is the Node.js equivalent of window in browsers. It acts as the global namespace object, which means any properties attached to global are accessible throughout your Node.js application.

    ```javascript
    global.myVariable = "Hello, World!";
    console.log(myVariable); // Outputs: Hello, World!
    ```

    - However, unlike in browsers, variables declared with var, let, or const don’t automatically become part of the global object.

    **_2. \_\_dirname_**

    - It gives the absolute path of the directory containing the current executing file.

    ```javascript
    console.log(__dirname);
    ```

    - Output might look like: /Users/parth/project-folder

    **_3. \_\_filename_**

    - It returns the absolute path of the currently executing file, including the file name.

    ```javascript
    console.log(__filename);
    ```

    - Output might look like: /Users/parth/project-folder/index.js

    **_4. require()_**

    - It is used to import modules, JSON, or local files into your Node.js application. It loads and caches the modules.

    ```javascript
    const fs = require("fs");
    console.log(fs);
    ```

    - Here, the built-in fs (File System) module is loaded and its API becomes available for use.

    **_5. module_**

    - Every file in a Node.js application is treated as a module. The module object represents the current module and can be used to export or import functionality.

    ```javascript
    module.exports = { name: "Parth" };
    ```

    - This exports an object that other files can import using require().

    **_6. exports_**

    - This is a shorthand for module.exports used to export functionality from a module. When you assign something to exports, it becomes available to be imported in another file.

    ```javascript
    exports.myFunction = () => {
      console.log("Hello!");
    };
    ```

    **_7. setTimeout()_**

    - the execution of a one-time callback function after a delay in milliseconds.

    ```javascript
    setTimeout(() => {
      console.log("Executed after 2 seconds");
    }, 2000);
    ```

    **_8. setInterval()_**

    - It repeatedly executes a given function at specified intervals (in milliseconds) until stopped.

    ```javascript
    setInterval(() => {
      console.log("Repeats every 3 seconds");
    }, 3000);
    ```

    **_9. setImmediate()_**

    - execution of a function to occur immediately after the current event loop phase completes, but before any setTimeout or setInterval functions.

    ```javascript
    setImmediate(() => {
      console.log("This runs immediately after the current event loop phase");
    });
    ```

    **_10. clearTimeout()_**

    - It stops the execution of a function scheduled with setTimeout().

    ```javascript
    const timer = setTimeout(() => {
      console.log("This will not run");
    }, 5000);

    clearTimeout(timer);
    ```

    **_11. clearInterval()_**

    - It stops a function scheduled with setInterval().

    ```javascript
    const interval = setInterval(() => {
      console.log("This will stop after 5 seconds");
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
    ```

    **_12. clearImmediate()_**

    - It stops the execution of a function scheduled with setImmediate().

    ```javascript
    const immediate = setImmediate(() => {
      console.log("This will not run");
    });

    clearImmediate(immediate);
    ```

    **_13. process_**

    - The process object is a global object that provides information about and control over the current Node.js process. Some key properties and methods include:

    - process.argv: An array containing the command-line arguments passed to the Node.js process.

    - process.env: An object containing the environment variables for the current process.

    - process.exit([code]): Terminates the process with an optional exit code (default is 0 for success).

    - process.nextTick(): Schedules a callback to be invoked in the next iteration of the event loop, before any setTimeout or setImmediate callbacks.

    ```javascript
    console.log(process.argv); // Command-line arguments
    console.log(process.env); // Environment variables
    process.exit(1); // Exits with failure code 1
    ```

    **_14. Buffer_**

    - It is used to handle binary data in Node.js. Buffers are useful when dealing with file system operations or handling streams, such as TCP streams.

    ```javascript
    const buffer = Buffer.from("Hello, World!");
    console.log(buffer); // Outputs binary representation of the string
    ```

    **_15. console_**

    - Similar to the browser, console is used for debugging purposes, allowing you to print messages or inspect objects.

    ```javascript
    console.log("This is a log message");
    console.error("This is an error message");
    ```

    - These global objects and methods provide the building blocks for developing with Node.js, giving you the ability to manage files, interact with processes, schedule tasks, and handle modules without the need for explicit imports.

18. **NodeJS Module**

    - In Node.js, modules are individual building blocks of functionality that can be reused across the application

    **Types of Modules in Node.js:**

    **_1. Core Modules:_**

    - These are built into Node.js and don’t need to be installed. Examples include fs, http, path, etc.

    - fs (File System): Used for file handling.
    - http: Used to create HTTP servers.
    - path: Used to handle and manipulate file paths.

    ```javascript
    const http = require("http");
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, World!\n");
    });

    server.listen(3000, () => {
      console.log("Server running at http://localhost:3000/");
    });
    ```

    **_2.Local Modules:_**

    - These are user-defined modules, written by developers to perform specific tasks in the application.

    **File: math.js (a local module):**

    math.js

    ```javascript
    function add(a, b) {
      return a + b;
    }

    function subtract(a, b) {
      return a - b;
    }

    module.exports = { add, subtract };
    ```

    app.js

    ```javascript
    const math = require("./math");

    console.log(math.add(5, 3)); // Outputs: 8
    console.log(math.subtract(5, 3)); // Outputs: 2
    ```

    - Here, math.js is a local module that exports two functions: add and subtract. In app.js, these functions are imported and used.

    **_3. Third-Party Modules:_**

    - These are modules installed via npm (Node Package Manager) and used to extend the functionality of your app. Examples include express, lodash, etc.

    **Example: Installing and using lodash (a popular third-party utility library)**

    **Install the module:**

    ```javascript
    npm install lodash
    ```

    ```javascript
    const _ = require("lodash");

    const numbers = [10, 20, 30, 40];
    const sum = _.sum(numbers);
    console.log(sum); // Outputs: 100
    ```

    - lodash is a third-party module installed via npm, and it provides various utility functions like sum().

    **_Exporting and Importing Modules in Node.js:_**

    - To make functions, objects, or variables available outside of a module, you need to export them. You can do this using module.exports or exports. To import them in another file, use require().

    **Exporting a single function or object:**

    ```javascript
    // File: greet.js
    module.exports = function (name) {
      return `Hello, ${name}!`;
    };

    // File: app.js
    const greet = require("./greet");
    console.log(greet("Parth")); // Outputs: Hello, Parth!
    ```

    **Exporting multiple items as an object:**

    ```javascript
    // File: calculator.js
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    module.exports = { add, subtract };

    // File: app.js
    const calculator = require("./calculator");
    console.log(calculator.add(2, 3)); // Outputs: 5
    console.log(calculator.subtract(7, 4)); // Outputs: 3
    ```

    **Shorthand export with exports:**

    ```javascript
    // File: math.js
    exports.multiply = (a, b) => a * b;
    exports.divide = (a, b) => a / b;
    ```

    - Note: module.exports and exports point to the same object by default. However, if you reassign module.exports, make sure to use only one of these methods consistently.

    **_The require() Function:_**

    - The require() function is used to load modules in Node.js. It is used to load:

      - Core Modules: These are built-in Node.js modules like fs or path.
      - Local Modules: Files created within your project.
      - Third-Party Modules: Installed via npm.

    - Path and Loading Behavior:

      - Core Modules: Simply use the name (require('fs')).
      - Local Modules: Use relative or absolute paths (require('./file') or require('/absolute/path')).
      - Third-Party Modules: Use the package name (require('lodash')).

    - Node.js caches modules after the first time they are loaded, improving performance.

    **_Module Caching:_**

    - Once a module is loaded, it is cached in memory so that subsequent require() calls load the cached version instead of re-executing the module.

    - Modules are cached after the first load, so they aren’t re-executed each time they are required.

    ```javascript
    // File: greet.js
    console.log("This runs once");

    module.exports = "Hello";

    // File: app.js
    const greet1 = require("./greet");
    const greet2 = require("./greet");

    console.log(greet1); // Outputs: Hello
    console.log(greet2); // Outputs: Hello
    ```

    - In this example, even though require('./greet') is called twice, the code inside greet.js runs only once because of module caching.

19. **What is the difference between Node.js and JavaScript?**

    - Server-side runtime environment
    - Client-side scripting language

    - running JavaScript code on server
    - Primarily used for web development

    - Built on Chrome’s V8 JavaScript engine
    - Runs in a web browser’s JavaScript engine

    - building scalable network applications
    - Executes code within a browser environment

    - Provides access to file system and network resources
    - Limited to browser APIs and capabilities

    - Supports event-driven, non-blocking I/O operations
    - Executes in a single-threaded event loop

20. **Is Node.js single-threaded?**

    - Yes, Node.js is single-threaded

21. **What kind of API function is supported by Node.js?**

    - Synchronous: These API functions are used for blocking code.
    - Asynchronous: These API functions are used for non-blocking code.

22. **What is the difference between Synchronous and Asynchronous functions?**

    - Blocks the execution until the task completes.
    - Does not block the execution; allows other tasks to proceed concurrently.

    - Returns the result immediately after completion.
    - Typically returns a promise, callback, or uses event handling to handle the result upon completion.

23. **What is a module?**

    - A module in Node.js is a reusable block of code that encapsulates related functionality and can be exported and imported into other files or applications.

24. **What is npm and its advantages?**

    - npm (Node Package Manager) is a tool that helps manage, install, and share JavaScript packages.
    - making development faster by reusing code and simplifying project management.

25. **What is middleware?**

    - Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.

26. **How does Node.js handle concurrency even after being single-threaded?**

    - Node.js handles concurrency using its event loop and asynchronous, non-blocking I/O model, allowing it to efficiently manage multiple operations without creating additional threads.

27. **What is control flow in Node.js?**

    - Control flow in Node.js refers to the order in which code is executed, especially managing asynchronous operations like callbacks, promises, and async/await to ensure tasks run in the desired sequence.

28. **What do you mean by event loop in Node.js?**

    - The event loop in Node.js is a mechanism that allows it to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions.

29. **What is the order in which control flow statements get executed?**

    - Execution and queue handling
    - Collection of data and storing it
    - Handling concurrency
    - Executing the next lines of code

30. **What are the main disadvantages of Node.js?**

    - Single-threaded nature
    - Callback hell:Heavy reliance on callbacks for asynchronous operations can lead to deeply nested code, making it difficult to manage and read, although promises and async/await mitigate this.
    - Limited CPU-bound performance
    - Immaturity of some libraries

31. **What is the difference between Node.js and AJAX?**

    - Node.js is a JavaScript runtime environment that runs on the server side whereas AJAX is a client-side programming language that runs on the browser.

32. **What is package.json in Node.js?**

    - The package.json file in Node.js is a configuration file that contains metadata about the project, including dependencies, scripts, versioning, and project settings, enabling easy management of the application.

33. **What is callback hell?**

    - Callback hell refers to a situation in JavaScript where multiple nested callbacks make the code difficult to read, maintain, and debug, resulting in poor code structure.

34. **Difference between setImmediate() and process.nextTick() methods**

    - setImmediate() schedules a callback to be executed after the current event loop phase, while
    - process.nextTick() schedules a callback to be executed immediately after the current operation, before any I/O events or timers.

35. **What is the difference between setTimeout() and setImmediate() method?**

    - setTimeout() schedules a callback to be executed after a specified delay (in milliseconds)
    - setImmediate() schedules a callback to be executed on the next iteration of the event loop, regardless of delay.

36. **What are the three methods to avoid callback hell?**

    - Using async/await()
    - Using promises
    - Using generators

37. **Explain the types of streams in Node.js**

    - Readable Streams: Allow reading data from a source (e.g., file, network) in chunks.
    - Writable Streams: Allow writing data to a destination (e.g., file, network) in chunks.
    - Duplex Streams: Enable both reading and writing operations (e.g., TCP sockets).
    - Transform Streams: Modify or transform the data as it is read and written (e.g., compression or encryption streams).

38. **How can we implement authentication and authorization in Node.js?**

    - Authentication and authorization in Node.js can be implemented using middleware such as Passport.js for authentication and JWT (JSON Web Tokens) or OAuth for managing user permissions and access control.

39. **How to manage sessions in Node.js?**

    - Sessions in Node.js can be managed using middleware like express-session to create and manage session data on the server, often combined with a session store (like Redis or MongoDB) for persistence.

40. **How to read command line arguments in Node.js?**

    ```javascript
    let arguments = process.argv;

    console.log(arguments);
    ```

- Use a callback function to handle asynchronous operation.

```javascript
fs.readFile('myfile.txt', 'utf8',
(err, data)
 => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
```

## notes

- Create a Node.js application that prints the current working directory: \_\_dirname
- Write a command to update all outdated packages in a Node.js project: npm update

## importance point of nodejs

- Node.js is a backend JavaScript Framework. NodeJS is written on JavaScript, C, C++

- Exports in Node.js are used to export the component from one module to another. It can also export to literal, function, or object. It is responsible for including the JavaScript file into the node.js applications.

- Jade, Vash, and Handlebars are template engines that can be used with Node.js.

- The path. format() method is used to return a path string from the given path object. The method has some rules where one path property gets more priority over another.

- The cwd() method in Node.js is used to get the current working directory of the process.

- The path.isAbsolute() tell the path is absolute or not. It needed complete detail to locate the file. It accepts a single parameter A. The return value in this method specifies the path is absolute or not if it returns false as a value it means that path ios on zero-length

- The socket.send() is used to send the message from one socket to another socket. It takes the argument as length, address, callback, and messages.

- The npm install -g nodemon is the correct syntax for installing the Nodemon in the Node.js application where g means it downloads globally in the system.

- Node.js is not considered scalable to uses in CPU intensive type of application.

- Package.json is the entry point of the node application It is present in the root directory of the application.is can also be used to define the properties of a package. and the main advantage is that It is used to update the dependencies of an application.

- The fs.stat() method in Node.js is used to get the information about the given file or directory. It returns an fs.stat object that has several properties and methods to get details about the file or directory.

- The path.parse() method is used to return an object whose properties represent the given path. This method returns the following properties: It takes properties as root, dir, base, and name.

- The console.timeEnd() is a method in node.js which is the console class. This method stops a timer that was previously started by using the console.time() method and display the result using stdout in node.js. It takes the parameter as the label.

- The cipher.final() method is cipher within the crypto module which is used to return the buffer containing the value of the cipher object. It takes encoding as a parameter. and the return value is the object of the buffer containing the cipher value.

- The cipher.update() is a method in node.js within the crypto module that is used to update the cipher with data according to the given encoding format. It takes parameters as data, input encoding, and output encoding.

- DNS stands for domain name system it is a node module that is used to do name resolution facility that is provided by the operating system and actual DNS lookup.

- The dns.resolveNs() method of the dns module is used to resolve NS which means name server records for the specified hostname using DNS protocol.

- The dns.resolve4() is the method in node.js of the dns module which is used to resolve the IPv4 address for the specified hostname using DNS protocol. It takes parameters as hostname, option, and callback.

- The zlib.createDeflate() is a method in Node.js that comes under the Zlib It creates a new deflate object It takes a single parameter.

- The os.EOL comes with an os module which is used to get an end-of-line character or marker as specified by the operating system. It returns the end of the line marker.

- The os.uptime() is the method in Node.js that is used to get system uptime in seconds. This method does not accept any parameters.

- The Query String is used as utilities for parsing and formatting URL query strings.

- Streams are the data-handling method and it is used to read or write input into output as sequence manner. The main advantage of Streams is used to handle reading or writing the files.

- The stringDecoder.end() is a method that is used to return the input stored into the buffer as string format.

- The agent.maxFreeSockets is used to sets the maximum number of sockets that will be open in the free state. This node does not accept any parameters.

- The zlib.constants property is used to yields an object listing Zlib-related constants. It returns all the Zlib-related constants.

- The v8.serialize() is a method in node.js that is used to serialize any type of data into the default serializer. It takes the parameter as a value.

- The Utility module in node.js provides access to various utility functions in node.js. There are various utility modules available in the node.js inside the module library. This module is useful for developing a node-based web application.

- The util.callbackify() is used to run an asynchronous function and get a callback in the node.js it comes into the util module It is run an asynchronous function. It takes parameter as async_function

- The url.hash is a module is used to get and set the fragment portion of the URL. It is getting and setting the fragment value. It also gets and sets the fragment portion of the URL in Node.js.

- The libuv is dependencies in Node.js Which is used to provide the non-blocking Input Output operations to a consistent interface.

- The path.relative() method is used to find the relative path from a given path to another path the given path is the same then it converts the zero-length string the main advantage is it is based on the current working directory.
