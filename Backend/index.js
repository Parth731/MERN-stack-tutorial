// Importing events module
const EventEmitter = require("events");

// Creating an instance of EventEmitter
const emitter = new EventEmitter();

// Register an event listener
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

emitter.on("greet", () => {
  console.log("This is another listener for greet event");
});

const greetListener = (name) => {
  console.log(`One-time greeting: Hello, ${name}`);
};

emitter.once("greet", greetListener);

emitter.on("error", (err) => {
  console.error(`Error: ${err.message}`);
});

// Emit an error event
emitter.emit("error", new Error("Something went wrong!"));

// Emit the event
emitter.emit("greet", "Parth");

// Remove the listener
emitter.removeListener("greet", greetListener);

console.log(__dirname);
console.log(__filename);
