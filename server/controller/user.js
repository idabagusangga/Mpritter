const UserModel = require('../models/users')

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
}
module.exports = UserController;