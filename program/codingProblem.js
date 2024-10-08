//Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

// Check for Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//Find the Factorial of a Number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

//Find the Intersection of Two Arrays
function findIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

//FizzBuzz Problem
//Print numbers from 1 to 100. For multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz();

//Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

//Flatten a Nested Array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

//Write a function to check if two strings are anagrams of each other.
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false

//Write a function to find the first non-repeating character in a string.
function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"

//Implement a custom version of the map function.
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]
