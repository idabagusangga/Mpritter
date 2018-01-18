const UserModel = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  static createUser (req, res) {
    console.log('masuk sini');
    let newUser = new UserModel ({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    newUser.save()
    .then(resp => {
      console.log('masuk then');
      res.status(200).json({
        data: resp
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  static login (req, res) {
    UserModel.find({username: req.body.username})
    .then(result => {
      console.log(result)
      bcrypt.compare(req.body.password, result[0].password)
      .then(resp => {
        let payload = {
          username : result[0].username,
          id: result[0]._id
        }
        let token = jwt.sign(payload, process.env.SECRET)
        res.status(200).json({
          data: result,
          token: token
        })
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  static editProfile (req, res) {
    console.log('masuk sini');
    let decoded = jwt.verify(req.body.token,process.env.SECRET)
    UserModel.findById(decoded.id)
    .then(response => {
      response.profilePic = req.file.cloudStoragePublicUrl
      response.save()
      .then(result=>{
        console.log(result);
      })
      .catch(err=>{
        console.log(err);
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
module.exports = UserController;