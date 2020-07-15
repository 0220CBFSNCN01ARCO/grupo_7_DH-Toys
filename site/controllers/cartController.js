const db = require("../database/models");

const cartController = {
  cart: (req, res) => {
     db.Products.findAll({
      include: [{ association: "productCategory" }],
      limit: 3,
      where: {
        status: true
      }
    })
    .then(products => {
      res.render('cart', { title: 'cart',
                            user: req.session.userLogueado,
                            products,
                            cart: req.session.cart
                          });
    })
    
  },
  addItem: async (req, res) =>  {
    try{
     const product =  await db.Products.findByPk(req.params.id)
     const productToAdd = {
       id: product.id,
       name: product.name,
       image: product.image,
       price: product.price,
       cantidad: 1,
       subtotal: product.price
     }
     const productFound = req.session.cart.cartItems.find(element => {
        if(element.id === productToAdd.id){
          element.cantidad = element.cantidad + 1
          element.subtotal = element.cantidad * element.price
          return element
        }
    })
     if(!productFound){
      req.session.cart.cartItems.push(productToAdd)
     }
     req.session.cart.total = 0
     req.session.cart.cartItems.forEach(item => {
      req.session.cart.total += item.subtotal
    });
     console.log(req.session.cart)
     res.redirect('/')
    }catch(error){
      console.error(error)
    }
  },
  removeItem:(req, res)=>{
    const itemId = req.params.id
    const updatedCart = req.session.cart.cartItems.filter(item => {
      return item.id != itemId
    })
    req.session.cart.cartItems = updatedCart
    req.session.cart.total = 0
    req.session.cart.cartItems.forEach(item => {
     req.session.cart.total += item.subtotal
    });
    res.redirect('back');
  },
  updateCart: (req, res)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    for (const [key,value] of Object.entries(obj)){
      for(let i = 0; i < req.session.cart.cartItems.length; i++){
        if(req.session.cart.cartItems[i].id == key){
          req.session.cart.cartItems[i].cantidad = parseInt(value)
          req.session.cart.cartItems[i].subtotal = parseInt(value) * req.session.cart.cartItems[i].price
        }
      }
    }
    res.redirect('/cart')
  }
}

module.exports = cartController;