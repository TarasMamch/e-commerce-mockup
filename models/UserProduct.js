const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class UserProduct extends Model { }

UserProduct.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
})

module.exports = UserProduct