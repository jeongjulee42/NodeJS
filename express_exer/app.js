import express from 'express';

const app = express();

app.get('/', (req,res,next) => {
    res.send(req.url)
    next;
})
app.get('/', (req,res,next) => {
    res.send('Hello')
})

app.listen(8080);