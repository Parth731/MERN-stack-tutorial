console.log("This is the first statement");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

setInterval(() => {
  console.log("Repeats every 3 seconds");
}, 3000);

setImmediate(() => {
  console.log("This runs immediately after the current event loop phase");
});

console.log("This is the last statement");
