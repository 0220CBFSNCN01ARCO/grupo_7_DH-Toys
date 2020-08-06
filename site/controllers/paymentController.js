const mercadopago = require('mercadopago');
const db = require('../database/models');

mercadopago.configure({
  access_token: process.env.MP_CREDENTIALS
})

let newOrder = {}

const init = async (req, res) => {
  const config = {
    items: [],
    external_reference: "123123",
    auto_return: "all",
    back_urls: {
      failure: "http://localhost:3030/cart/rejected",
      success: "http://localhost:3030/cart/approved",
    },
  }
  let idUser = req.session.userLogueado[0].id;
  let cart = req.session.cart.cartItems;
  try{
    newOrder = await db.orders.create({
      description: null,
      amount: req.session.cart.total,
      idStatus: 1,
      idUser: idUser
    });
    cart.forEach(prod => {
      db.orders_products.create({
        idProduct: prod.id,
        idOrder: newOrder.id,
        quantity: prod.cantidad
      })
    });
    let item = {
      quantity: 1,
      unit_price: newOrder.amount
    }
    config.items.push(item);
    const generatePreference = await mercadopago.preferences.create(config);
    return res.redirect(generatePreference.body.init_point);
  }catch(error){
    console.error(error);
    res.redirect('/cart');
  }
};

const successPayment = async (req, res) => {
  try {
    await db.orders.update({idStatus: 2},
      { where: { id: newOrder.id }}
    )
    req.session.cart = { cartItems: [], total: 0 };
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}

const rejectedPayment = async (req, res) => {
  try {
    await db.orders.update({idStatus: 3},
      { where: { id: newOrder.id }}
    )
    res.redirect('/cart');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  init,
  successPayment,
  rejectedPayment
}