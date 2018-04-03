const bcrypt = require('bcrypt');

module.exports = (sequelize, DataType) => {

  const schema = {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },

    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }

    }
  };

  const Users = sequelize.define('Users', schema);

  Users.hook('beforeCreate', user => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });

  Users.comparePassword =  (encodedPassword, password) => {
    return bcrypt.compareSync(password, encodedPassword);
  };

  return Users;
};
