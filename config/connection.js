import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "mysql",
    storage: "../db/schema.sql"
})

export default sequelize