const fs = require('fs');
const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: process.env.MP_CREDENTIALS
})

const { Product, Order, OrderProduct } = require('../database/models');
const db = require('../database/models');
const session = require('express-session');

const init = async (req, res) => {
  const config = {
    items: [],
    external_reference: "123123",
    auto_return: "all",
    back_urls: {
      failure: "http://localhost:3000/cart/rejected",
      success: "http://localhost:3000/cart/approved",
    },
  }
  try {
    let idUser = req.session.userLogueado[0].id;
    const ordenDeCompra = await db.orders.findAll({
      where: { idUser: idUser },
      order: [['id', 'DESC']],
      limit: 1
    });
    let item = {
      quantity: 1,
      unit_price: ordenDeCompra[0].amount
    }
    config.items.push(item);

    const generatePreference = await mercadopago.preferences.create(config);
    console.log(generatePreference.body.init_point);
    return res.redirect(generatePreference.body.init_point);
  } catch (error) {
    console.error(error)
  }
};

const successPayment = async (req, res) => {

  try {
    const products = await db.Products.findAll({
      include: [{ association: "productCategory" }],
      limit: 10,
      where: {
        status: true
      }
    });
    req.session.cart = { cartItems: [], total: 0 };
    res.render('index', {
      title: 'Inicio',
      products: products,
      user: req.session.userLogueado,
      cart: null
    });
  } catch (error) {
    console.error(error);
  }

}

const rejectedPayment = async (req, res) => {
  try {
    const products = await db.Products.findAll({
      include: [{ association: "productCategory" }],
      limit: 10,
      where: {
        status: true
      }
    });
    res.render('index', {
      title: 'Inicio',
      products: products,
      user: req.session.userLogueado,
      cart: req.session.cart
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  init,
  successPayment,
  rejectedPayment
}