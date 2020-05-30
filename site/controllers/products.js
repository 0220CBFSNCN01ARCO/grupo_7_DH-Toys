const jsonOperations = require('./jsonLogic');
const path = require('path');

const products = {
    products: function () {
        const productsList = jsonOperations.readJSON(path.join('site','data','products.json'));
        return productsList;
        
    },
    allProductsWithImage: function(){
        const products = this.products();
        const productsWithImage = products.map((product) =>{
            product.image = path.join('/','images','products', product.image);
            return product;
        })
        return productsWithImage;
    },
    productById: function(id){
        const products = this.products();
        return filteredProduct = products.filter(product =>{
            return product.id == id;
        })
    },
    productWithImageById: function(id){
        const productsWithImage = this.allProductsWithImage();
        return filteredProductWithImage = productsWithImage.filter(product =>{
            return product.id == id;
        })
    },
    allProductsDifferentsById: function(id){
        const products = this.products();
        return filteredProducts = products.filter(product =>{
            return product.id != id;
        })
    },
    lastProductId: function(){
        const productsList = this.products();
        return lastProductId = productsList[productsList.length - 1].id;
    }
}
module.exports = products;