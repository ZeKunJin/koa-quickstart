const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("@/utils/database");

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        const _salt = bcrypt.genSaltSync();
        const _hash = bcrypt.hashSync(value, _salt);
        this.setDataValue("password", _hash);
      },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
