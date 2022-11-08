import express from "express";

const app = express();
app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    next("route");
  },
  (req, res, next) => {
    console.log("first-2");
    next();
  }
);
app.get("/", (req, res, next) => {
  console.log("second");
});

app.listen(8080);
