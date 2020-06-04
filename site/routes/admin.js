var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'site/public/images/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
 
var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', adminController.adminProducts)
router.get('/create', adminController.productRegister)
router.post('/create',upload.single('image'), adminController.addProduct)
router.get('/editor/:id', adminController.productEditor)
router.put('/editor/:id',upload.single('image'), adminController.editProduct)
router.delete('/delete/:id',adminController.deleteProduct)

module.exports = router;