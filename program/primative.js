// Swap two integers present in variables num1 and num2 without using temporary variable

let num1 = 10;
let num2 = 20;
[num2, num1] = [num1, num2];
console.log(num1, num2);

//Write a function which returns true if given value of number is an integer without using any inbuilt functions
// Example

function isInt(num) {
  //   console.log(num % 1);
  return num % 1 === 0;
}
// console.log(isInt(4.0));
// console.log(isInt(12.2));
// console.log(isInt(0.3));

// Create a function which returns a random number in the given range of values both inclusive

function randomNum(min, max) {
  return min + Math.round(Math.random() * (max - min));
}
console.log(randomNum(10, 50));

//Write a program to reverse a string

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

function reverseString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str.charAt(i) + newStr;
  }
  return newStr;
}
console.log(reverseString("javascript is fun"));

//Write a program to reverse a string by words. Also show the reverse of each words in place

function reverseByWordEachWordPlace(str) {
  return str
    .split(" ")
    .map((item) => item.split("").reverse().join(" "))
    .join(" ");
}

console.log(reverseByWordEachWordPlace("JavaScript is awesome"));

//Write a program to reverse a string by words
// function reverseByWord(str) {
//   return str.split(" ").reverse().join(" ");
// }
function reverseByWord(str) {
  let newStr = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    newStr = arr[i] + " " + newStr;
  }
  return newStr;
}
console.log(reverseByWord("JavaScript is awesome"));

//Write a program to reverse a given integer number
function reverseInt(num) {
  let newNum = 0;
  while (num > 0) {
    console.log(num % 10);
    newNum = newNum * 10 + (num % 10);
    console.log(Math.floor(num / 10));
    num = Math.floor(num / 10);
  }
  return newNum;
}

// console.log(reverseInt(3849));

// Write a code to replace all the spaces of the string with underscores

let str = "hello world";
console.log(str.split(" ").join("_"));
console.log(str.replaceAll(" ", "_"));

// Write a function which can convert the time input given in 12 hours format to 24 hours format
function convertTo24HrsFormat(timeText) {
  var timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":");

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am")) hours = hours == 12 ? "0" : hours;
  else if (timeTextLower.endsWith("pm"))
    hours = hours == 12 ? hours : String(+hours + 12);
  //   return hours.padStart(2, 0) + ":" + mins.padStart(2, 0).slice(0, -2);
  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}
console.log(convertTo24HrsFormat("12:10AM"));
console.log(convertTo24HrsFormat("5:00AM"));
console.log(convertTo24HrsFormat("12:33PM"));
console.log(convertTo24HrsFormat("01:59PM"));
console.log(convertTo24HrsFormat("11:8PM"));
console.log(convertTo24HrsFormat("10:02PM"));

// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

function getTheGapX(str) {
  if (!str.includes("X")) {
    return -1;
  }

  const firstIndex = str.indexOf("X");
  const lastIndex = str.lastIndexOf("X");
  return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
}

console.log(getTheGapX("XeroX"));
console.log(getTheGapX("Xamarin"));
console.log(getTheGapX("JavaScript"));
console.log(getTheGapX("F(X) !== G(X) !== F(X)"));

//Write a function to truncate a string to a certain number of letters
function truncateString(str, charCount) {
  if (str.length > charCount) {
    return str.substr(0, charCount - 3) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("Hello World", 4));
console.log(truncateString("JS is fun", 10));
console.log(truncateString("JavaScript", 7));
console.log(truncateString("JS is funny", 10));

// Write a code to truncate a string to a certain number of words
function truncateStringByWord(str, wordLimit) {
  return str.split(" ").slice(0, wordLimit).join(" "); // "JavaScript is simple"
}
console.log(
  truncateStringByWord("JavaScript is simple but not easy to master", 3)
);

// Create a regular expression to validate if the given input is valid Indian mobile number or not
function validateMobile(str) {
  const regexMobile = /^(\+91|0)?\s?\d{10}$/;
  return regexMobile.test(str);
}

console.log(validateMobile("+919876543210"));
console.log(validateMobile("+91 9876543210"));
console.log(validateMobile("09876543210"));
console.log(validateMobile("9876543210"));
console.log(validateMobile("99876543210"));

// Write a function which returns a list of elements which contains at least one character as digit
function numInStr(mixArray) {
  return mixArray.filter((value) => {
    return /[0-9]/.test(value);
  });
}
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));

// Write a function which checks if a given search text is present either in the beginning of the first name or the second name
function validateName(str, searchText) {
  const regex = new RegExp("^(\\w*\\s)?" + searchText + "\\w*?", "i");
  return regex.test(str);
}
console.log(validateName("Nedson PETER", "pet"));
console.log(validateName("Peter Parker", "pet"));
console.log(validateName("Speter parker", "pet"));
console.log(validateName("John Doe Peter", "pet"));

//Write a function to chop a string into chunks of a given length and return it as array
function stringChop(str, size = str.length) {
  return str.match(new RegExp(".{1," + size + "}", "g"));
}
console.log(stringChop("JavaScript"));
console.log(stringChop("JavaScript", 2));
console.log(stringChop("JavaScript", 3));

//Write a code to remove all the vowels from a given string
const str1 = "I love JavaScript";
console.log(str1.replace(/[aeiou]/gi, ""));

//Write a function which accepts two valid dates and returns the difference between them as number of days
function getDaysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

console.log(getDaysBetweenDates("10/15/2020", "12/1/2020"));
