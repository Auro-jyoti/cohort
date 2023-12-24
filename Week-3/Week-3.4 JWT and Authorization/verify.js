const jwt = require("jsonwebtoken");

const token = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR29sZGllIiwiYWNjb3VudE51bWJuZXiwiYWNjb3VudE51bWJuZXIiOjEyMzEyMzEyMywiaWF0IjoxNzAzNDAyNzUuE27HRqmP2AcN1BP_ZwM50fQ.bv3ergj5pQEjGdSMtuE27HRqmP2AcN1BP_ZwM5PGtH4",
  "someRandomThatTheIntruderDoNotKnow"
);

console.log(token);