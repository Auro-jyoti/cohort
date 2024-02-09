let x: number = 1;
// x = "harkirat";

console.log(x);

function maxValue(arr: number[]) {
  let max: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(maxValue([1, 2, 3]));

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

type KeyInput = "up" | "down" | "left" | "right";

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Default 0, 1, 2, 3 are assigned
// If you want to explicitly assign something then

enum DirectionTwo {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

function doSomething(keyPressed: string) {}

doSomething("up");
doSomething("down");
doSomething("downrandom");

function doNothing(keyPressed: Direction) {
  if (keyPressed === Direction.Up) {
  }
}

doNothing(Direction.Up);
doNothing(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);

// enums use case in express :
enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500,
}

// app.get("/", (req, res) => {
//     if(!req.query.userId) {
//         res.status(ResponseStatus.Error).json({})
//     }

//     res.status(ResponseStatus.Success).json({});
// })

function firstEle(arr: (number | string)[]) {
  return arr[0];
}

const value = firstEle(["harkirat", "singh"]);
console.log(value.toUpperCase());

// const value = firstEle([1, 2, 3, "harkirat"]);
// not complaining
// one way to fix the problem is : firstEle(arr: (number [] | string []))

function identity<T>(arg: T[]) {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

function identityTwo<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");

const ele = identity<string | number>(["harkirat", 1, 7]);

// exporting and importing modules in typescript

// npm install express @types/express

// import express from express

// export const a = 1;

// module.exports a = 1;

// export default a; 