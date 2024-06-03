const express = require('express');
const router = express.Router();
const { Product } = require("../../models")

router.get("/", async (req, res) => {
    try {
        const data = await Product.findAll()
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "ERROR", err })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await Product.findByPk(req.params.id)
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "ERROR", err })
    }
})

module.exports = router