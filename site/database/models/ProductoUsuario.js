
module.exports = (sequelize, DataTypes) => {
  let alias = 'Products_Users';

  let cols = {
    id_product_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false 
    },
    id_user: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  };

  let config = {
    tablename: 'products_users',
    timestamps: false
  };

  const ProductoUsuario = sequelize.define(alias, cols, config);

  return ProductoUsuario;
}