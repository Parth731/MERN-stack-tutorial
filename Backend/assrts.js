const assert = require("assert").strict;

// Function call
try {
  /** deepStrictEqual */
  //   assert.deepStrictEqual({ a: 1 }, { a: "1" }); //error
  //   assert.deepStrictEqual({ a: "5" }, { a: "5" });
  //  console.log("No Error Occurred");

  /** doesNotThrow */
  //   assert.doesNotThrow(() => {
  //     throw new TypeError("Wrong value");        //error
  //   });
  //   assert.doesNotThrow(() => {
  //     throw new TypeError("The Wrong value error");  //error
  //   });
  //console.log("No Error Occurred");

  /** equal */
  //   let a = 10;
  //   let b = 20;
  //   assert.equal(a, b);  //error
  //   let a = 20;
  //   let b = 20;
  //   assert.equal(a, b);

  console.log("No Error Occurred");
} catch (error) {
  console.log("Error: ", error);
}
