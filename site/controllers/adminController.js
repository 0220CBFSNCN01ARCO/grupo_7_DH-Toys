const db = require("../database/models");

const adminController = {
  adminProducts: (req, res, next) => {
    db.Products.findAll({
      include: [{association: 'productCategory'}]
    })
    .then(products => {
      res.render('admin/productos', {
        title: 'Admin',
        products: products
      })
    })
  },
  productRegister: (req, res) => {
    res.render('admin/productRegister', { title: 'Admin' });
  },
  productEditor: (req, res) => {
    db.Products.findByPk(req.params.id, {
      include: [{association: "productCategory"}]
    })
    .then(product => {
      res.render('admin/productEditor', {
        title: 'Admin',
        product: product
      });
    })
  },
  editProduct: (req, res, next) => {
    db.Products.update({
        name: req.body.name,
        description: req.body.description,
        idCategoryProduct: req.body.category,
        image: req.file.originalname,
        price: req.body.price,
        age: req.body.age
      }, {where: {
          id: req.params.id
      }})
    res.redirect('/admin')
  },
  addProduct: (req, res, next) => {
    db.Products.create({
      name: req.body.name,
      description: req.body.description,
      idCategoryProduct: req.body.category,
      image: req.file.originalname,
      price: req.body.price,
      age: req.body.age
    })
    res.redirect('/admin')
  },
  deleteProduct: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/admin')
  }
}

module.exports = adminController;