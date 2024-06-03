const User = require("./User")
const Product = require("./Product")
const UserProduct = require("./UserProduct")
const Image = require("./Image")

User.hasMany(UserProduct)

Product.hasMany(Image)

module.exports = {
    User,
    Product,
    UserProduct,
    Image
}