// JSON - JavaScript Object Notation

// JavaScript Object
var person = {
  name: "John",
  age: 25,
  city: "Exampleville",
  isStudent: true,
};

// JSON Object (as a string)

// In JSON, an object is represented as a string with a specific syntax. The keys and strings must be enclosed within double quotes

// {
//   "name": "John",
//   "age": 25,
//   "city": "Exampleville",
//   "isStudent": true
// }

// Usage :

// --> JavaScript objects can be directly used within JavaScript code.

// --> JSON Object is often used for data interchange between systems because it is a standardized format that can be easily parsed and generated by different languages.

// --> JSON is not tied to any specific language , its a universally accepted format used across different platforms.

// --> Human readable and easy to write.

// --> Many web APIs (Application Programming Interfaces) use JSON for data exchange. It is lightweight and efficient format for transmitting data over the internet.

// --> JSON is often used for configuration files and data storage, especially in web development.


// Two important things to keep in mind

// JSON.parse and JSON.stringify

// const personTwo = JSON.parse(person)
// console.log(person);

const personThree = JSON.stringify(person);
console.log(personThree);

// keep in mind person[name] would return a result
// personThree[name] will return as undefined

// console.log(personThree["name"]);