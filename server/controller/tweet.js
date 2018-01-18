const TweetModel = require('../models/twits')
const jwt = require('jsonwebtoken')

class TweetController {
  static postTweet (req, res) {
    let decoded = jwt.verify(req.body.token, process.env.SECRET)
    let tags = []
    let split = req.body.post.split(" ")
    split.forEach(word => {
      if (word[0] == '#'){
        tags.push(word)
      }
    })
    let newTwit = new TweetModel ({
      ownersId: decoded.id,
      post: req.body.post,
      tags: tags
    })
    newTwit.save()
    .then(result => {
      res.status(200).json({
        data: result
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err
      })
    })
  }
  static getTweets (req, res) {
    TweetModel.find().populate('ownersId')
    .then(result=>{
      res.status(200).json({
        data: result
      })
    })
    .catch(err=>{
      res.status(500).json({
        err: err
      })
    })
  }
  static searchTweetByTags (req, res) {
    let finalResult = []
    TweetModel.find()
    .then(result => {
      result.forEach(post =>{
        if (post.tags.indexOf('#'+req.body.search) != -1) {
          finalResult.push(post)
        }
      })
      res.status(200).json({
        data: finalResult
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = TweetController;