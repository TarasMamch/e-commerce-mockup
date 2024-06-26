const sequelize = require('../config/connection');
const { User, Product, Image } = require("../models")

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
        price: "349.99",
    },
    {
        id: 2,
        name: "Sony Playstation 5",
        price: "499.99",
    },
    {
        id: 3,
        name: "Microsoft Xbox Series X",
        price: "499.99",
    }
]

const images = [
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470924_sd.jpg;maxHeight=2000;maxWidth=2000",
        ProductId: 1
    },
    {
        image: "https://media.gamestop.com/i/gamestop/11108140_ALT01?$pdp$",
        ProductId: 2
    },
    {
        image: "https://i5.walmartimages.com/asr/9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        ProductId: 3
    }
]

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')
    await User.bulkCreate(users, { individualHooks: true })
    await Product.bulkCreate(products)
    await Image.bulkCreate(images)
    console.log('\n----- ALL IS DONE, EXITING -----\n')

    process.exit(0);
}

seedAll();