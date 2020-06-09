var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');
const multer = require('multer');
const {reglasDeValidacionDeUsuarios, ValidacionDelogin, validar} = require('../middleware/userRegisterValidator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'site/public/images/users')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: storage })

router.get('/login', loginController.login )
router.post('/login',ValidacionDelogin(), validar, loginController.verify )
router.get('/login/register', loginController.register )
router.post('/login/register',upload.single('avatar'),reglasDeValidacionDeUsuarios(), validar, loginController.addUser)

module.exports = router;