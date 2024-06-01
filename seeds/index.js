const sequelize = require('../config/connection');
const { User } = require("../models")

const users = [
    {
        username: "Lorem",
        password: "password"
    }
]

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')
    await User.bulkCreate(users, { individualHooks: true })
    console.log('\n----- ALL IS DONE, EXITING -----\n')

    process.exit(0);
}

seedAll();