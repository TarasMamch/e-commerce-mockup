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
        UserId: req.body.UserId
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await UserProduct.findByPk(req.params.id)
        await data.destroy()
        return res.status(200).json({})
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router