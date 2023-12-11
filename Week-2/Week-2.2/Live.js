const express = require("express");
// middlewares
const bodyParse = require('body-parser');
const port = 3000;

// this is what initializes express
const app = express();
// returns an object

app.use(bodyParse.json());

app.get("/", function(req, res) {
    console.log(req.body);
    // db call
    res.send("hello world");
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`);
});

// create a todo app that lets users store todos on the serverport