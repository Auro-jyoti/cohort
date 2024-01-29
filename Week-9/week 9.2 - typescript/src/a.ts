let x: number = 1;
// x="goldie";
console.log(x);

function greet(firstName: string, lastName: string, age: Number) {
  console.log("Hello " + firstName);
}

greet("Goldie", "lol", 4);

// type inference
function sum(a: number, b: number) {
  return a + b;
}

const value = sum(1, 3);
console.log(value);

function isLegal(age: number): boolean {
  if (age! <= 18) {
    return false;
  }

  return true;
}

const result = isLegal(1);
console.log(result);

function runAfter1S(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1S(function () {
  console.log("Hi There!!");
});

// interfaces :

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string,
}

function isLegalObj(user: User) {
  return !(user.age <= 18);
}

isLegalObj({
  firstName: "Goldie",
  lastName: "lol",
  age: 20,
});

interface Person {
    name: string,
    age: number,
    greet(phrase: string): void,
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("goldie", 22);

console.log(e.name); 

type UserType = {
    firstName: string;
    lastName: string;
    age: number
}

// unions
type stringOrNumber = string | number;

function printId(id: stringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(10);
printId("2");

// intersections

type EmployeeType = {
    name: string;
    startDate: Date;
}

type ManagerType = {
    name: string;
    department: string;
}

type TeamLead = EmployeeType & ManagerType;

const teamLead: TeamLead = {
    name: "Goldie",
    startDate: new Date(),
    department: "Software Developer"
}