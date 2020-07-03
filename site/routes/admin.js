var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('multer');
const {userNotLogged, adminValidator} = require('../middleware/userValidator');

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
router.get('/changeState/:id',userNotLogged, adminValidator, adminController.changeState)

module.exports = router;