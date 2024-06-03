const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class UserProduct extends Model { }

UserProduct.init({
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
})

module.exports = UserProduct