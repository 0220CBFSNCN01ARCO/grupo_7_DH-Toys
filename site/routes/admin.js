var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('multer');
const {userNotLogged, adminValidator, userEditValidator, validar} = require('../middleware/userValidator');

//PRODUCTS

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'site/public/images/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
 
var upload = multer({ storage: storage })

router.get('/', userNotLogged, adminValidator,  adminController.adminProducts)
router.get('/create', userNotLogged, adminValidator, adminController.productRegister)
router.post('/create',upload.single('image'), adminController.addProduct)
router.get('/editor/:id', userNotLogged, adminValidator, adminController.productEditor)
router.put('/editor/:id',upload.single('image'), adminController.editProduct)
router.delete('/delete/:id',adminController.deleteProduct)
router.get('/changeProductStatus/:id',userNotLogged, adminValidator, adminController.changeProductStatus)

//USERS

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'site/public/images/users')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: storage })

router.get('/users', userNotLogged, adminValidator,  adminController.adminUsers)
router.get('/userEditor/:id', userNotLogged, adminValidator, adminController.userEditor)
router.put('/userEditor/:id',upload.single('avatar'),userEditValidator(), validar, adminController.editUser)
router.delete('/userDelete/:id',adminController.deleteUser)
router.get('/changeUserStatus/:id',userNotLogged, adminValidator, adminController.changeUserStatus)


//ORDERS

router.get('/orders',userNotLogged, adminValidator, adminController.adminOrders)
router.get('/orderDetail/:id',userNotLogged, adminValidator, adminController.orderDetail)



module.exports = router;