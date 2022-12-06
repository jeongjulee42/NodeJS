import express from 'express';
import 'express-async-errors';
import { validationResult } from 'express-validator';
import * as tweetController from '../controller/tweet.js';

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()){
        return next();
    }
    return res.status(400).json({message: errors.array()[0].msg})
}


const router = express.Router();

router.get('/', tweetController.getTweets);

router.get('/:id', tweetController.getTweet);

router.post('/', [body('text').trim().isLength({min: 3}).withMessage('text should be at least 3 characters'),], tweetController.createTweet);

router.put('/:id', tweetController.updateTweet);

router.delete('/:id', tweetController.deleteTweet);

export default router;