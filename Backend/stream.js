// Node.js program to demonstrate the
// unpipe event

// Accessing fs module
const fs = require("fs");

// Create a readable stream
const readable = fs.createReadStream("input.txt");

// Create a writable stream
const writable = fs.createWriteStream("output.txt");

// Handling unpipe event
writable.on("unpipe", (readable) => {
  console.log("Unpiped!");
});

// Calling pipe method
readable.pipe(writable);

// Calling unpipe method
readable.unpipe(writable);

console.log("Program Ended...");
