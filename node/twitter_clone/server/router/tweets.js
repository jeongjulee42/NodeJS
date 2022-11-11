import express from "express";
import "express-async-errors";

const router = express.Router();

const tweets = [
  {
    id: "1",
    text: "Dream Coder",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export default router;
