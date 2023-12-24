const jwt = require("jsonwebtoken");

const contents = {
  name: "Goldie",
  accountNumbner: 123123123,
  iat: 1703402754,
};

const newToken = jwt.sign(contents, "someRandomThatTheIntruderDoNotKnow");

console.log(newToken);