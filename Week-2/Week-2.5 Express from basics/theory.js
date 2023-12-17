function calculateSum(n) {
    let ans = 0;
    for(let i = 1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

let ans = calculateSum(10);
console.log(ans);

// The above code runs locally , it can not be
// used by people outside of my local machine.

// To make it available for people outside of this machine we create something known as servers

const express = require('express');

function calculateSumTwo(n) {
    let ans = 0;
    for(let i= 1; i<=n; i++) {
        ans = ans + i;
    }

    return ans;
}

const app = express(); 

app.get('/', function(req, res){
    const n = req.query.n;
    const ans = calculateSumTwo(n)
    res.send(ans.toString());
});

// localhost:3000/?n=30;
app.listen(3000);