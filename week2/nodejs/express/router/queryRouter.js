const express = require('express');
const route = express.Router()


route.get('/params', (req, res) => {
    try {
        console.log(req.query);
        const { a, b } = req.query
        if (!a || !b || isNaN(a) || isNaN(b)) {
            throw new Error("check the params"); 
        }
        res.json({ message: "hello", result: parseInt(a) + parseInt(b) })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
})

module.exports = route