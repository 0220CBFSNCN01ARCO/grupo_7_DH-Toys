var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/admin', adminController.admin)
router.get('/admin/create', adminController.productRegister)


module.exports = router;