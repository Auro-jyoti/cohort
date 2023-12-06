// push -> pushes an element at the end of the array; (second argument is a number not an array)
const push_array = [1, 2, 3, 4, 5, 6];
push_array.push(5);
console.log(test_array);

// pop -> pops from the end
const pop_array = [1, 2, 3, 4, 5, 6];
pop_array.pop();
console.log(pop_array);

// shift -> pops from the front
const shift_array = [1, 2, 3, 4, 5, 6];
shift_array.shift();
console.log(shift_array);

// unshift -> put something at the front of the array
const unshift_array = [1, 2, 3, 4, 5, 6];
unshift_array.unshift(100);
console.log(unshift_array);

// concat -> concatenate two arrays, (second argument is an array not a number)
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
console.log(firstArray.concat(secondArray));

// forEach
const forEach_array = [10, 20, 30, 40, 50, 60];
function logThing(arr) {
  console.log(arr);
}
// here logThing is the callback function, forEach takes each element from the array and performs logThing individually;
forEach_array.forEach(logThing);