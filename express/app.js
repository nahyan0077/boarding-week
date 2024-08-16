const express = require('express');

const app = express()



app.get('/', (req, res) => {
    res.json({ message: "hello" })
})


app.get('/query', (req, res) => {
    try {
        const { a, b } = req.query

        let x = parseInt(a) + parseInt(b)

        res.send(x.toString())

    } catch (error) {
        res.json({ error: error.message })
    }
})


app.listen(3000, () => {
    console.log("connected to 3000");
})