const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: "userid",
    isAdmin: true,
  },
  "secret"
);
