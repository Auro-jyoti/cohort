/* FUNCTIONS */

// A function in javascript is a set of statements that performs a
// task or calculates a value.

// It should take some input and return an output where there is some
// obvious relationship between the input and the output.

// Syntax :
// how to declare a function.
// here n is the parameter
function findSum(n) {
    let ans = 0;
    for(let i=1; i<n; i++) {
        ans = ans + i;
    }

    return ans;
}

function sum(a, b) {
    return a + b; 
}

// function does not run / execute unless untill it  is called.

let ans = findSum(100);
// here 100 is the argument
console.log(ans)


/* CALLBACK FUNCTIONS */

// can you call a function inside another function ?
// --> YES

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSquares(a, b) {
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2;
}

function sumOfCubes(a, b) {
    const val1 = cube(a);
    const val2 = cube(b);

    return val1 + val2;
}

console.log(sumOfSquares(1, 2));
console.log(sumOfCubes(5, 6));

// Up in the above code DRY is being violated 
// DRY - Do not repeat yourself

// thats where callback functions come into picture

function square(a) {
    return a * a ;
}

function sumofSquareUpdated(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

sumofSquareUpdated(a, b, square);

/* ANONYMOUS FUNCTIONS */

// function without a name is called as an anonymous funciton

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);

    return val1 + val2;
}

sumOfSomething(a, b, function(a) {
    return a * a;
})