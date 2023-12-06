// parseInt - global function, no need to do str.parseInt();
function explainParseInt(value) {
    console.log("Original Value : ", value);
    let result = parseInt(value);
    console.log("After parseInt", result);
}

explainParseInt("42");
explainParseInt("42px");
// output is 3, since 3.14 is a float 
explainParseInt("3.14"); 

// parseFloat - global function
console.log(parseFloat("42"));
console.log(parseFloat("3.13"));
console.log(parseFloat("4.2px"));

