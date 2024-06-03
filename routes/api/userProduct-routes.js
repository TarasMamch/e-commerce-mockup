const express = require('express');
const router = express.Router();
const { UserProduct } = require("../../models")

router.get("/", async (req, res) => {
    try {
        const data = await UserProduct.findAll()
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "ERROR", err })
    }
})

router.post("/", (req, res) => {
    UserProduct.create({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        userId: req.body.userId
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

module.exports = router