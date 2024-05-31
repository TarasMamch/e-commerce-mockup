const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mysql",
    storage: "../db/schema.sql"
})

module.exports = sequelize;