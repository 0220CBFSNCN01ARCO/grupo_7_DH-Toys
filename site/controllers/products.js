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
            producto.image = '/images/products/' + producto.image;
            return producto;
        })
        return productosConImagen;
    },
}
module.exports = productos;