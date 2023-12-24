const jwt = require("jsonwebtoken");

const value = {
  name: "Goldie",
  accountNumbner: 123123123,
};

// jwt
const token = jwt.sign(value, "secret");
console.log(token);
// this token has been generated using this secret, and hence this
// token can only be verified using the secret

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR29sZGllIiwiYWNjb3VudE51bWJuZXIiOjEyMzEyMzEyMywiaWF0IjoxNzAzNDAyNzU0fQ.TCwe8Rsq7CnBkwb-7AslLnnUsAmzKITmwpAeSA1Os78

// This long generated key is the checkbook for you , do not loose it,

// Put the generated key in the jwt.io website , it will decode the encoded id and password and give it to you, the original Id and Password , hence do no share that with any one.
