console.log("Hello World");
console.log(a);

// variables in js
var a = 1;
a = 2;
console.log(a);

let a = 3;
a = 5;
console.log(a);

const b = 19;
b = 2;
console.log(b);

// Data types:
// string, numbers and booleans

let firstName = "Goldie";
let age = 18;
let isMarried = false;

console.log("this persons name is " + firstName + " and their age is " + age);

// callbacks
function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

console.log(sum(5, 1, displayResultPassive));


setTimeout(() => {}, [1 * 1000]);

