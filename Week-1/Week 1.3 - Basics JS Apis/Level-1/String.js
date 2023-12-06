// length -> not a function
function getLength(str) {
  console.log("Original String", str);
  console.log("Length", str.length);
}

getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Index : ", str.indexOf(target));
  console.log("Index, Last :", str.lastIndexOf(target));
}

findIndexOf("Hello World World", "World");

// getSlice -> (string, start, end) -> start is included, end is not included
function getSlice(str, start, end) {
  console.log("Original String", str);
  console.log("After Slice : ", str.slice(start, end));
}

getSlice("Helloook World", 0, 5);

// behind the scene :

function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

const value = "Aurojyoti";
console.log(cutIt(value, 2, 5));

// difference between substr and slice - substr - start + length
// slice - start to end;

// substr -> start -> starting index, length -> start + length
function getSubStr(str, start, length) {
  console.log("Original String", str);
  console.log("After substr :", str.substr(start, length));
}

getSubStr("Goldie", 0, 5);

// replace
const str = "hello world";
console.log(str.replace("world", "javascript"));

// split - converts to an array based on the delimeter
const split_str = "Hi My name is golide";
const words = split_str.split(" ");
console.log(words);

// trim - trims out the extra white space from front and back of the string
const trim_str = " Aurojyoti Bhatta ";
console.log(trim_str.trim());

// toUpperCase and toLowerCase
const uppercase_str = "aurojyoti";
console.log(uppercase_str.toUpperCase());

const lowercase_str = "AUROJYOTI";
console.log(lowercase_str.toLowerCase());