var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

<<<<<<< HEAD
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
=======
router.get('/login', loginController.login )
>>>>>>> 6568b2d639633f972005f563311d26643e218643

module.exports = router;