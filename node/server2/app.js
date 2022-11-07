import express from "express";

const app = express();
app.get("/", (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  res.status(200).send("ok");
});

app.listen(8080);
