1.  **Explain Event Loop with Example**

    1. **Initialization**: When Node.js starts, it initializes the event loop and processes the input script. This script may contain asynchronous API calls and timers (like `setTimeout`).

    2. **Event Loop Mechanism**: After processing the initial script, Node.js enters the event loop, which continuously checks for tasks to execute.

    3. **Libuv Library**: Node.js uses a library called **libuv** to handle asynchronous operations. This library manages a thread pool (typically consisting of four threads) that handles tasks too heavy for the event loop, such as I/O operations and network connections.

    4. **Task Completion**: When a task in the thread pool is completed, it triggers a callback function. This callback may handle errors or perform additional operations.

    5. **Event Queue**: The callback function is then placed in the **event queue**. The event loop checks the call stack (the list of currently executing functions). When the call stack is empty, it moves the callback from the event queue to the call stack for execution.

    6. **Continuous Process**: This process of checking the call stack and event queue continues, allowing Node.js to handle multiple asynchronous operations efficiently without blocking the main thread.

    In summary, the event loop allows Node.js to execute non-blocking I/O operations by offloading heavy tasks to a thread pool and managing their callbacks through an event queue.

    ```javascript
    console.log("This is the first statement");

    setTimeout(function () {
      console.log("This is the second statement");
    }, 1000);

    console.log("This is the third statement");
    ```

    1. **First Console Log**: The first console log statement is executed and logged to the console. Once it completes, it is removed from the call stack.

    2. **setTimeout**: A `setTimeout` function is called. This sets a timer (in this case, for 1000 milliseconds) and pushes the task to the queue. The task is then removed from the call stack.

    3. **Second Console Log**: The third console log statement is executed next, logging "This is the third statement" to the console. After it completes, it is also removed from the call stack.

    4. **Timer Completion**: After the timer set by `setTimeout` expires, the callback function associated with it is placed in the event queue.

    5. **Event Loop**: The event loop checks if the call stack is empty. When it is, the callback from the event queue is moved to the call stack.

    6. **Final Console Log**: The callback function runs, logging "This is the second statement" to the console, and then it is removed from the call stack.

    Note: In the above case, if the timeout was set to 0ms then also the statements will be displayed in the same order. This is because although the callback will be immediately sent to the event queue, the event loop won’t send it to the call stack unless the call stack is empty i.e. until the provided input script comes to an end.

    The event loop in Node.js is a crucial mechanism that allows it to handle asynchronous operations efficiently. Here’s a clear and concise explanation of how it works:

    ![eventloop]("https://media.geeksforgeeks.org/wp-content/uploads/20200224050909/nodejs2.png")

2.  **Explain Phases of the Event loop**

    - The event loop in JavaScript has several phases that manage the execution of both synchronous and asynchronous code. Here's a simple explanation of each phase:

    1. Timers Phase: This phase handles callbacks from setTimeout() and setInterval(). If any timers have completed their delay, their associated callback functions will be executed in this phase.

    2. Pending Callbacks Phase: This phase handles I/O operations that were completed but haven't had their callbacks executed yet. For example, tasks like network requests may have their callbacks executed here.

    3. Idle, Prepare Phase: This phase is mainly for internal purposes used by Node.js, and usually, no code runs here. It prepares for the next phases.

    4. Poll Phase: This is the most crucial phase. It checks for new I/O events, executes any I/O callbacks, and waits for more events if no timers are ready. If there's nothing in the queue, it will wait here until something arrives.

    5. Check Phase: This phase handles setImmediate() callbacks, which execute immediately after the poll phase.

    6. Close Callbacks Phase: This is where callbacks for events like socket.close() or process.close() are executed.

3.  **What is nodejs?**

    - nodejs is a javascript runtime. it is allow you javascript code outside of browser and typiclly on server. it is used v8 engine for execute quickly and effecintly. nodejs is single thread, non blocking IO operation by offloading heavy tasks to a thread pool and managing their callbacks through an event queue, handle multiple asynchronous operations efficiently without blocking the main thread.

4.
