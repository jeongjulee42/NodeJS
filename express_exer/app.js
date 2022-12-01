import express from 'express';
import {} from 'express-async-errors';
import postRouter from './router/post.js'
import userRouter from './router/user.js'

console.clear();
console.log('----------------------');

const app = express();

app.use(express.json())

app.use('/posts', postRouter);
app.use('/users', userRouter)


app.listen(8080);