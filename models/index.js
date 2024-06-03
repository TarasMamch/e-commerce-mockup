const User = require("./User")
const Product = require("./Product")
const UserProduct = require("./UserProduct")

User.hasMany(UserProduct)

module.exports = {
    User,
    Product
}