const Sequelize = require("sequelize");
const { database, username, password, host } = require("@/config/mysql.config");

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
  logging: true,
});

sequelize.sync({
  force: false,
});

module.exports = sequelize;
