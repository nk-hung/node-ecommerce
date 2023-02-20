module.exports = (sequelize, DataTypes) => {
    return sequelize.define('role', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}