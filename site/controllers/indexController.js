const db = require("../database/models");
const { Sequelize } = require('../database/models');

const indexController = {
  index: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      limit: 10,
      where: {
        state: true
      }
    })
      .then((products) => {
        console.log(products)
        res.render('index', {
          title: 'Inicio',
          products: products,
          user: req.session.userLogueado
        });
      });
  },
  allProducts: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        state: true
      }
    })
      .then((products) => {
        res.render('products', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado
        });
      });
  }, search: (req, res) => {
    const toFind = req.body.search
    db.Products.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: '%' + toFind + '%'
        }
      }
    })
      .then(products => {
        res.render('search', { title: 'search', products, user: req.session.userLogueado, search: toFind })
      })
  }, byAgeLessThanThree: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        age: {[Sequelize.Op.lte]: 3},
        state: true
      }
    })
      .then((products) => {
        res.render('forAge', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado
        });
      });
  }, byAgeBetweenthreeAndSeven: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        age: {[Sequelize.Op.between]: [3, 7]},
        state: true
      }
    })
      .then((products) => {
        res.render('forAge', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado
        });
      });
  }, byAgeSevenOnwards: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        age: {[Sequelize.Op.gte]: 7},
        state: true
      }
    })
      .then((products) => {
        res.render('forAge', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado
        });
      });
  }
}

module.exports = indexController;