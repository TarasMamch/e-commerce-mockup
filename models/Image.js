const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Image extends Model { }

Image.init({
    image: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
})

module.exports = Image