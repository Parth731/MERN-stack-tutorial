// let geeks = {
//   name: "ABC",
//   printFunc: function () {
//     console.log(this.name);
//   },
// };

// let printFunc2 = geeks.printFunc;

// printFunc2(); //"No output"

// let geeks = {
//   name: "ABC",
//   printFunc: function () {
//     console.log(this.name);
//   },
// };

// let printFunc2 = geeks.printFunc;

// printFunc2(); //"No output"

//object geeks1
var geeks1 = { name: "ABC", article: "C++" };
//object geeks2
var geeks2 = { name: "CDE", article: "JAVA" };
// object geeks3
var geeks3 = { name: "IJK", article: "C#" };
function printVal() {
  console.log(this.name + " contributes about " + this.article);
}
var printFunc2 = printVal.bind(geeks1);
//using bind()
// bind() takes the object "geeks1" as parameter
printFunc2();
var printFunc3 = printVal.bind(geeks2);
printFunc3();
var printFunc4 = printVal.bind(geeks3);
printFunc4();
//uniquely defines each objects

let person = {
  firstName: "John",
  lastName: "Doe",
  middleName: "C",
  currentAge: undefined,
};

let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;

console.log(middleName, age);

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var sum = arr.reduce((a, b) => a + b);

console.log(sum);

const frusts = new Map();

frusts.set("name", "John");
frusts.set("age", 18);

console.log(typeof frusts);
