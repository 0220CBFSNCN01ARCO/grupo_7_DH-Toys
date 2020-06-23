

module.exports = (sequelize, DataTypes) => {
  let alias = 'Categories_Users';

  let cols = {
    id_category_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }

  let config = {
    tablename: 'categories_users',
    timestamps: false
  }

  const CategoriaUsuario = sequelize.define(alias, cols, config);

  return CategoriaUsuario;
}