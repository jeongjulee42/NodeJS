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

router.get('/', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) not found`});
    }
});

router.post('/', (req, res, next) => {
    const {text, name, username} = req.body;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) not found`});
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet) => tweet.id !== id);
    res.sendStatus(204);
});

export default router;