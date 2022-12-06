import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const validateTweet = [body('text').trim().isLength({min: 3}).withMessage('text should be at least 3 characters'), validate];

const router = express.Router();

router.get('/', isAuth, tweetController.getTweets);

router.get('/:id', isAuth, tweetController.getTweet);

router.post('/', isAuth, validateTweet, tweetController.createTweet);

router.put('/:id', isAuth, validateTweet, tweetController.updateTweet);

router.delete('/:id', isAuth, tweetController.deleteTweet);

export default router;