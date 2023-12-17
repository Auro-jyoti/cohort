const express = require('express');
const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){
    const kidneys = req?.body?.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have "+kidneyLength+"kidneys");
});

// global catches
// defined at the end
// called if there is an exception
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry Something is up with our server",
    })
})

app.listen(3000);