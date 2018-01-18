var express = require('express');
var router = express.Router();
const TweetController = require ('../controller/tweet')

router.get('/', TweetController.getTweets)
router.post('/', TweetController.postTweet)

module.exports = router;