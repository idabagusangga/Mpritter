var express = require('express');
var router = express.Router();
const UserController = require ('../controller/user')
const Helper = require('../helper/imageHelper')

/* GET users listing. */
router.post('/register', UserController.createUser)
router.post('/login', UserController.login)
router.post('/editProfile', Helper.multer.single('image'), Helper.sendUploadToGCS, UserController.editProfile)

module.exports = router;
