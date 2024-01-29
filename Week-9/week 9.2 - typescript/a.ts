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
    if(age !<= 18) {
        return false;
    }

    return true;
}

const result = isLegal(1);
console.log(result); 


function runAfter1S(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1S(function(){
    console.log("Hi There!!");
})