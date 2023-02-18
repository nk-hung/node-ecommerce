module.exports = (sequelize, DataTypes) => {
    return sequelize.define('e_user', {
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER(11)
        },
        email: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING(255)
        },
        username: {
            allowNull: true,
            type: DataTypes.STRING(55)
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT('medium')
        },
        mobile: {
            allowNull: true,
            type: DataTypes.INTEGER(10)
        },
        is_admin: {
            allowNull: false,
            type: DataTypes.TINYINT(2)
        }
    }, {
        timestamps: false,
        tableName: 'e_user'
    })
}