import express from 'express';
import 'express-async-errors';

const tweets = [
    {
        id:'1',
        text:'This is my first tweet!',
        createdAt:Date.now().toString(),
        name: 'bob-Lee',
        username:'bob',
        url:'',
    },
    {
        id:'2',
        text:'This is my second tweet!',
        createdAt:Date.now().toString(),
        name: 'Elloe',
        username:'eli',
        url:'',
    },
]

const router = express.Router();

router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweets.filter((tweet) => tweet.username === username) : tweets;
    res.status(200).json(data);
});
