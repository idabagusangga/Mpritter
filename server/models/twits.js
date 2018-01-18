const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let tweetSchema = new Schema ({
  ownersId: [{
    type: Schema.Types.ObjectId,
    ref: 'UserTwit'
  }],
  post: String,
  tags: []
})

const Tweet = mongoose.model('Tweets', tweetSchema)

module.exports = Tweet;