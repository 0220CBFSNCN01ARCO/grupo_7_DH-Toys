var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')


/* GET home page. */
router.get('/admin', adminController.adminProducts)
router.get('/admin/create', adminController.productRegister)
router.post('/admin/create', adminController.addProduct)
router.get('/admin/editor/:id', adminController.productEditor)
router.put('/admin/editor/:id', adminController.editProduct)
router.delete('/admin/delete/:id',adminController.deleteProduct)


module.exports = router;