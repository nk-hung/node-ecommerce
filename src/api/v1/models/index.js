const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize');
// fs.readFileSync('./')
const basename = path.basename(__filename)

const { mysql } = require('../../../config/mysql.config')
console.log('mysql', mysql)
const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, mysql);

const db = {}
fs
    .readdirSync(__dirname)
    .filter(file => file !== basename && file.indexOf('.') !== 0 && file.slice(-3) === '.js')
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    });

Object.keys(db).forEach((model) => db[model].associate && db[model].associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;