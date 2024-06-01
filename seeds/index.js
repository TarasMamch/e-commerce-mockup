const sequelize = require('../config/connection');
const { User, Product } = require("../models")

const users = [
    {
        username: "Lorem",
        email: "lorem@gmail.com",
        password: "password"
    }
]

const products = [
    {
        id: 1,
        name: "Nintendo Switch",
        price: "299",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470924_sd.jpg;maxHeight=2000;maxWidth=2000",
    }
]

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')
    await User.bulkCreate(users, { individualHooks: true })
    await Product.bulkCreate(products)
    console.log('\n----- ALL IS DONE, EXITING -----\n')

    process.exit(0);
}

seedAll();