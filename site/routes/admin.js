var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')


/* GET home page. */
router.get('/admin', adminController.adminProducts)
router.get('/admin/create', adminController.productRegister)
router.get('/admin/editor/:id', adminController.productEditor)
router.put('/admin/editor/:id', adminController.editProduct)


module.exports = router;