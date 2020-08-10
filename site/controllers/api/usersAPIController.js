const db = require("../../database/models");

const apiUsers = {
  list: async (req, res) => {
    try {
      let listUsers = await db.Users.findAll({
        attributes: ['id', 'name', 'lastname', 'email']
      });

      for (let i = 0; i < listUsers.length; i++) {
        listUsers[i].setDataValue("endpoint", `http://localhost:3030/api/users/${i + 1}`);
      }

      let respuesta = {
        meta: {
          count: listUsers.length,
          users: listUsers
        }
      }
      res.json(respuesta);

    } catch (error) {
      return res.status(500).json({ ok: false, error })
    }

  },
  description: async (req, res) => {

    try {
      let userDescription = await db.Users.findByPk(req.params.id, {
        attributes: ['id', 'name', 'lastname', 'email', 'avatar']
      });

      if (!userDescription) {
        return res.status(404).json({ ok: false, msg: 'No se encontró el usuario buscado' });
      }
      
      userDescription.setDataValue("imgavatar", `http://localhost:3030/images/users/${userDescription.avatar}`);

      res.json(userDescription);

    } catch (error) {
      console.error(error)
    }

  }
}

module.exports = apiUsers;