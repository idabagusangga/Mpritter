const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

let userSchema = new Schema ({
  email: String,
  username: String,
  password: String
})

userSchema.pre('save',function(callback){
    bcrypt.hash(this.password,10)
    .then(hash=>{
        this.password = hash
        callback()
    })
    .catch(callback)
})

const User = mongoose.model('UserTwit', userSchema)

module.exports = User;