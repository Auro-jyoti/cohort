// arrow funtions in javascript

function sum (a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b; 
}

const ans = sum(1, 2);
console.log(ans);

// given an array, give me back a new array in which every value
// is multiplied by 2;
// [1, 2, 3, 4, 5]
// [2, 4, 6,,8, 10]

// solution 1:
const input = [1, 2, 3, 4, 5];
const newArrya = [];

for(let i=0; i<input.length; i++){
    newArrya.push(input[i] * 2);
}

console.log(newArrya);

// solution 2, using map:
function transform(i) {
    return i * 2;
}

const ansTwo = transform(2);
console.log(ans);

const ansThree = input.map(transform);
console.log(ans);

// filtering
// what if I tell u, given an input array, give me back the even values from it

const arr = [1, 2, 3, 4, 5];

const newArr = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 == 0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

// filter:
const arrTwo = [4,5,6,67234,43];
function filterLogic(n) {
    if(n%2 == 0) {
        return true;
    } else {
        return false;
    }
}

const ansFour = arrTwo.filter(filterLogic);

// create a map fn that takes an array and a transfrom fn as
// input and returns the transformed array as output

const map = (arr, fn) => {
    const transformedArr = [];
    for(let i=0; i<arr.length; i++){
        transformedArr.push(fn(arr[i]));
    }

    return transformedArr;
}