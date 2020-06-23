

module.exports = (sequelize, DataTypes) => {
  let alias = 'Users';

  let cols = {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_category_user: DataTypes.INTEGER
  }

  let config = {
    tablename: 'users',
    timestamps: false
  }

  const Usuario = sequelize.define(alias, cols, config);
  
  return Usuario;
}