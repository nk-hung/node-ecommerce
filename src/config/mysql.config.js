module.exports = {
  mysql: {
    host: "localhost",
    database: "simple_ecommerce",
    username: "testUser",
    password: "passtest",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
