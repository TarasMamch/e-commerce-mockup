const express = require('express');
const router = express.Router();
const { Product, Image } = require("../../models")

router.get("/", async (req, res) => {
    try {
        const data = await Image.findAll()
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "ERROR", err })
    }
})

module.exports = router