const operacionesJSON = require('./jsonLogic');
const path = require('path');

const productos = {
    productos: function () {
        const listadoProductos = operacionesJSON.leerJSON(path.join('site','data','products.json'));
        return listadoProductos;
        
    },
    allProductsWithImage: function(){
        const productos = this.productos();
        const productosConImagen = productos.map((producto) =>{
            producto.image = path.join('/','images','products', producto.image);
            return producto;
        })
        return productosConImagen;
    },
    productById: function(id){
        const productos = this.productos();
        return productoFiltrado = productos.filter(product =>{
            return product.id == id;
        })
    },
    productWithImageById: function(id){
        const productos = this.allProductsWithImage();
        return productoFiltrado = productos.filter(product =>{
            return product.id == id;
        })
    },
    allProductDifferentsById: function(id){
        const productos = this.productos();
        return productosFiltrados = productos.filter(product =>{
            return product.id != id;
        })
    },
    lastProductId: function(){
        const productsList = this.productos();
        return lastProductId = productsList[productsList.length - 1].id;
    }
}
module.exports = productos;