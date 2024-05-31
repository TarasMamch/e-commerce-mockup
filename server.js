const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const sequelize = require('./config/connection')
const SequelizeStore = require("connect-session-sequelize")(session.Store)

const app = express()
const port = 5000

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "DELETE"],
        credentials: true,
    })
)

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})