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
        user: req.session.userLogueado,
        cart: req.session.cart
      })
    })
  },
  productRegister: (req, res) => {
    res.render('admin/productRegister', { title: 'Admin', user: req.session.userLogueado, cart: req.session.cart });
  },
  productEditor: (req, res) => {
    db.Products.findByPk(req.params.id, {
      include: [{association: "productCategory"}]
    })
    .then(product => {
      res.render('admin/productEditor', {
        title: 'Admin',
        product: product,
        user: req.session.userLogueado,
        cart: req.session.cart
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
      }},
      res.redirect('/admin'))
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
  changeProductStatus: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(product => {
      if(product.status){
        db.Products.update({
          status: false
        },{where: {
          id:req.params.id
        }})
      }else{
        db.Products.update({
          status: true
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
        user: req.session.userLogueado,
        cart: req.session.cart
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
        user: req.session.userLogueado,
        cart: req.session.cart
      });
    })
  },
  editUser: (req, res, next) => {
    const errors = validationResult(req);
    const userToEdit = req.body;
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
        res.render('admin/userEditor', {title: 'Admin Users', userToEdit:user, errors: errors.errors, user: req.session.userLogueado, cart: req.session.cart })
      })
    }
  },
  deleteUser: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/admin/users')
  },
  changeUserStatus: (req, res) => {
    db.Users.findByPk(req.params.id)
    .then(user => {
      if(user.status){
        db.Users.update({
          status: false
        },{where: {
          id:req.params.id
        }})
      }else{
        db.Users.update({
          status: true
        },{where: {
          id:req.params.id
        }})
      }
      res.redirect('/admin/users')
    })
  },
  adminOrders: async (req, res) => {
    let orders = {}
    try{
      orders = await db.orders.findAll(
        { include: { all: true}}
      )
      res.render('admin/orders', {
        title: 'Admin Orders',
        orders,
        user: req.session.userLogueado,
        cart: req.session.cart
      })
    }catch(error){
      console.error(error);
    } 
  },
  orderDetail: async (req, res) =>{
    let orderDetail = {}
    try {
      orderDetail = await db.orders_products.findAll({
        include: [{association: 'products'}],
        where: { idOrder: req.params.id}
      })
      console.log(orderDetail)
      res.render('admin/orderDetail', {
        title: 'Detalle Orden',
        orderDetail,
        user: req.session.userLogueado,
        cart: req.session.cart
      })
    } catch (error) {
      console.error(error)
    }
  }
}
module.exports = adminController;