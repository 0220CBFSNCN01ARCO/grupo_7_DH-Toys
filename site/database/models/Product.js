
module.exports = (sequelize, DataTypes) => {

  let alias = "Products";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    age: DataTypes.INTEGER,
    idCategoryProduct: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  };

  let config = {
      tablename: "products",
      timestamps: false
  }

  const Product = sequelize.define(alias,cols, config);

  Product.associate = function(models) {
    Product.belongsTo(models.categories_products,{
      as: "productCategory",
      foreignKey: "idCategoryProduct"
    }),
    Product.hasMany(models.orders_products,{
      as: "orderProducts",
      foreignKey: "idProduct"
    })
  }
 
  return Product;
}