const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidnyes = users[0].kidneys;
  const numberOfKidnyes = johnKidnyes.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidnyes.length; i++) {
    if (johnKidnyes[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidnyes - numberOfHealthyKidneys;
  res.json({
    numberOfKidnyes,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({});
});

app.delete("/", function (req, res) {
  if (isThereAtLeastOneHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }

    users[0].kidneys = newKidneys;
    res.json({ msg: "Done" });
  } else {
    // res.sendStatus(411);
    res.status(411).json({
        msg: "No bad kidney"
    })
  }
});

function isThereAtLeastOneHealthyKidney() {
  let atLeastOneHealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneHealthyKidney = true;
    }
  }

  return atLeastOneHealthyKidney;
}

app.listen(3001);
