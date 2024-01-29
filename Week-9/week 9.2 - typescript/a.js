"use strict";
let x = 1;
// x="goldie";
console.log(x);
function greet(firstName, lastName, age) {
    console.log("Hello " + firstName);
}
greet("Goldie", "lol", 4);
// type inference
function sum(a, b) {
    return a + b;
}
const value = sum(1, 3);
console.log(value);
function isLegal(age) {
    if (age <= 18) {
        return false;
    }
    return true;
}
const result = isLegal(1);
console.log(result);
