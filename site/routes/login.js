var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');
const usersController = require('../controllers/usersController')
const {check, valiationResult, body} = require('express-validator');
const multer = require('multer');

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
router.post('/login', loginController.verify )
router.get('/login/register', loginController.register )
router.post('/login/register',upload.single('avatar'),[body('email').custom(function(value){
        const users = usersController.users();
        const userFound =  users.find(user => {
            return user.email == value;
        })
        if(userFound){
            return false;
        } return true;
    }).withMessage('E-mail ya existente'),check("password", "Password Invalido, minimo 4 caracteres")
    .isLength({ min: 4 })
    .custom((value,{req, loc, path}) => {
        if (value !== req.body.repeatPassword) {
            // trow error if passwords do not match
            throw new Error("Los passwords no coinciden");
        } else {
            return value;
        }
    })
], loginController.addUser)

module.exports = router;