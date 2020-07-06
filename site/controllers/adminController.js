const db = require("../database/models");
const { check, validationResult, body } = require('express-validator')

const adminController = {
  adminProducts: (req, res, next) => {
    db.Products.findAll({
      include: [{association: 'productCategory'}]
    })
    .then(products => {
      res.render('admin/productos', {
        title: 'Admin',
        products: products,
        user: req.session.userLogueado
      })
    })
  },
  productRegister: (req, res) => {
    res.render('admin/productRegister', { title: 'Admin', user: req.session.userLogueado });
  },
  productEditor: (req, res) => {
    db.Products.findByPk(req.params.id, {
      include: [{association: "productCategory"}]
    })
    .then(product => {
      res.render('admin/productEditor', {
        title: 'Admin',
        product: product,
        user: req.session.userLogueado
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
      .then(res.redirect('/admin'))
    
  },
  addProduct: (req, res, next) => {
    db.Products.create({
      name: req.body.name,
      description: req.body.description,
      idCategoryProduct: req.body.category,
      image: req.file.originalname,
      price: req.body.price,
      age: req.body.age,
      state: true
    })
    .then(res.redirect('/admin'))
  },
  deleteProduct: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/admin')
  },
  changeState: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(product => {
      console.log(product)
      if(product.state){
        db.Products.update({
          state: false
        },{where: {
          id:req.params.id
        }})
      }else{
        db.Products.update({
          state: true
        },{where: {
          id:req.params.id
        }})
      }
      res.redirect('/admin')
    })
  },
  adminUsers: (req, res, next) => {
    db.Users.findAll({
      include: [{association: 'userCategory'}]
    })
    .then(users => {
      res.render('admin/users', {
        title: 'Admin Users',
        users,
        user: req.session.userLogueado
      })
    })
  },
  userEditor: (req, res) => {
    db.Users.findByPk(req.params.id, {
      include: [{association: "userCategory"}]
    })
    .then(user => {
      res.render('admin/userEditor', {
        title: 'Admin Users',
        userToEdit: user,
        user: req.session.userLogueado
      });
    })
  },
  editUser: (req, res, next) => {
    const errors = validationResult(req);
    const userToEdit = req.body;
    console.log(userToEdit);
    if (errors.isEmpty()) {
    db.Users.update({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar: req.file.originalname
      }, {where: {
          id: req.params.id
      }})
      .then(res.redirect('/admin/users'))
    }else{
      db.Users.findByPk(req.params.id, {
        include: [{association: "userCategory"}]
      })
      .then(user => {
        res.render('admin/userEditor', {title: 'Admin Users', userToEdit:user, errors: errors.errors, user: req.session.userLogueado })
      })
    }
  },
  deleteUser: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/admin')
  },
  changeUserStatus: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(product => {
      console.log(product)
      if(product.state){
        db.Products.update({
          state: false
        },{where: {
          id:req.params.id
        }})
      }else{
        db.Products.update({
          state: true
        },{where: {
          id:req.params.id
        }})
      }
      res.redirect('/admin')
    })
  }
}
module.exports = adminController;