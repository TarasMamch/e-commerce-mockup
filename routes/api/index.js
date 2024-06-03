const router = require('express').Router();
const userRoutes = require('./user-routes')
const productRoutes = require("./product-routes")
const userProductRoutes = require("./userProduct-routes")
const imageRoutes = require("./image-routes")

router.use("/users", userRoutes)
router.use("/products", productRoutes)
router.use("/user_products", userProductRoutes)
router.use("/images", imageRoutes)

module.exports = router;