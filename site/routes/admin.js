var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('multer');
const path = require('path');

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
router.get('/admin', adminController.adminProducts)
router.get('/admin/create', adminController.productRegister)
router.post('/admin/create', adminController.addProduct)
router.get('/admin/editor/:id', adminController.productEditor)
router.put('/admin/editor/:id',upload.single('image'), adminController.editProduct)
router.delete('/admin/delete/:id',adminController.deleteProduct)


module.exports = router;