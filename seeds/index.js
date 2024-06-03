const sequelize = require('../config/connection');
const { User, Product, UserProduct } = require("../models")

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
        price: "345.99",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470924_sd.jpg;maxHeight=2000;maxWidth=2000",
    },
    {
        id: 2,
        name: "Sony Playstation 5",
        price: "499.99",
        image: "https://media.gamestop.com/i/gamestop/11108140_ALT01?$pdp$",
    },
    {
        id: 3,
        name: "Microsoft Xbox Series X",
        price: "499.99",
        image: "https://i5.walmartimages.com/asr/9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    }
]

const userProducts = [
    {
        name: "Test",
        price: "153",
        image: "dawdfefsf",
        UserId: 1
    }
]

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')
    await User.bulkCreate(users, { individualHooks: true })
    await Product.bulkCreate(products)
    await UserProduct.bulkCreate(userProducts)
    console.log('\n----- ALL IS DONE, EXITING -----\n')

    process.exit(0);
}

seedAll();