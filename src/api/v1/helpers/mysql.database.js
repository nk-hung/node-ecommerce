const Sequelize = require("sequelize");
const db = require("../../../config/mysql.config");

module.exports = {
  getConnectMysql: async () => {
    try {
      const mySQL = new Sequelize(
        db.mysql.database,
        db.mysql.username,
        db.mysql.password,
        {
          ...db.mysql,
        }
      );
      console.log("Connect DB Success!");
      return mySQL;
    } catch (error) {
      console.log("Connect DB FAIL", error);
    }
  },
};
