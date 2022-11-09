import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
  })
);

app.get("/", (req, res) => {
  res.send("Welcome!");
  console.log(req.cookies);
});

app.listen(8080);
