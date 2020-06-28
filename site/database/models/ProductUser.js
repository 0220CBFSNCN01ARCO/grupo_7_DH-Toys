
module.exports = (sequelize, DataTypes) => {
  let alias = 'ProductsUsers';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false 
    },
    idUser: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER
  };

  let config = {
    tablename: 'products_users',
    timestamps: false
  };

  const ProductoUsuario = sequelize.define(alias, cols, config);

  return ProductoUsuario;
}