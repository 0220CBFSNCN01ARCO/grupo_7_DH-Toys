var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');
const usersController = require('../controllers/usersController');
const multer = require('multer');
const {reglasDeValidacionDeUsuarios, validacionDelogin, validar, userLogged, userNotLogged} = require('../middleware/userValidator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'site/public/images/users')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: storage })

router.get('/login', userLogged, loginController.login )
router.post('/login',validacionDelogin(), validar, loginController.verify )
router.get('/login/register', userLogged,  loginController.register )
router.post('/login/register', upload.single('avatar'), reglasDeValidacionDeUsuarios(), validar, loginController.addUser)
router.get('/profile', userNotLogged, usersController.profile );

module.exports = router;