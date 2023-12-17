// creating an http server
// express
// node default library ? , no , does not come along with node.
// fs does come along with node.

const express = require("express");
const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }

  return ans;
}

// req, res => request and response
app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);
  res.send("Hi There, sum is : " + ans);
});

app.listen(3001);
