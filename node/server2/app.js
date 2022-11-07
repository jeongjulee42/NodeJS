import express from "express";

const app = express();
app.get("/sky/:idd", (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.key);
});

app.listen(8080);
