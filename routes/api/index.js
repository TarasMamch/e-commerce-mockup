const router = require('express').Router();
const userRoutes = require('./user-routes')
const productRoutes = require("./product-routes")
const userProductRoutes = require("./userProduct-routes")

router.use("/users", userRoutes)
router.use("/products", productRoutes)
router.use("/user_products", userProductRoutes)

module.exports = router;