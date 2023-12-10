// javascript is synchronous single threaded language, i.e it does things sequentially one after the other.

// We also have certain web apis that allow us to perform asynchronous tasks in java script such as setTimeOut(() => {});

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }

  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("Hello World");

// Busy waiting, dumb way to synchronously sleeping the thread :

function syncSleep() {
  let a = 1;
  for (let i = 0; i < 10000000; i++) {
    a++;
  }
}

syncSleep();
// here hello world wont get printed immediatly
console.log("Hello World");

// some examples of async functions
// setTimeOut(() => {}, 10000);
// fs.readFile - to read a file from your filesystem
// fetch - to fetch some data from an API Endpoint

// How to read a file locally ?
const fs = require("fs");
// above syntax is asking for a new library fs provided by node js

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hi there from js");

// ASYNC AND AWAIT

function kiratAsyncFuntion() {
  let p = new Promise(function (resolve) {
    resolve("Hi there!!");
  });
  return p;
}

function main() {
  kiratAsyncFuntion().then(function (value) {
    console.log(value);
  });
}

main();

function goldieAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi There!!");
    }, 1000);
  });

  return p;
}

async function main() {
  // no callbacks, no .then syntax;
  // control will wait here untill the promise gets output or resolved

  // Caller side
  let value = await goldieAsyncFunction();
  // it will not log the value, unless the above one is executed.
  console.log(value);
}

main();
console.log("after main");

// Again, it is just syntactic sugar. Still uses callbacks/ Promises under the hood Makes code much more readable than callbacks/ Promises .
// Usually used on the caller side, not on the side where you define an async function.
