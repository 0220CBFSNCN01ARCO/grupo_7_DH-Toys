const adminController = {
  admin: (req, res) => {
    res.render('admin/productos', { title: 'Admin' });
  },
  productRegister: (req, res) => {
    res.render('admin/productRegister', { title: 'Admin' });
  }
}

module.exports = adminController;