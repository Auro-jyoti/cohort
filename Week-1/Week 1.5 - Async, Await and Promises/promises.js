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

// the above code is ugly
// Promises are syntactical sugar(better way of writting code) that
// make this code slightly more readable

// setTimeOut and all are async functions written by someone else,
// How can we create an asynchronous function of our own ?

const fs = require("fs");
function kiratReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}

kiratReadFile(onDone);
// in the above code, it is just a wrapper on top of another async function, which is fine.
// Usually all async functions you will write will be on top of JS provided async functions like setTimeOut or fs.readFiles.
// Even the above is also considered as ugly, whats the better way ? Promises !!!
const fs = require("fs");

function kiratsReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

// call back function to call;
function onDone(data) {
  console.log(data);
}

kiratsReadFile().then(onDone);

// Promise Class :
var d = new Promise(function(resolve) {

});

console.log(d);
// prints Promise {<pending>}
// Promise on a high level gives three outputs, Resolved, Pending or Rejected!!!

var f = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("foo");
    }, 10000);
});

function callback() {
    console.log(f);
}

console.log(f);
f.then(callback);
// .then() is called once the above promise is resolved

 