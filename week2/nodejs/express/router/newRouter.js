const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');

const SECRET = "THISISMYSECRET"

router.get('/jwt' ,(req,res) =>{
    let data = req?.query?.name
    res.send(`${data} no data`)
})

router.get('/sign',(req,res) => {
    let data = {
        userId  : 7592009094,
        username : "nahyan"
    }
    const token = jwt.sign({data},SECRET, {expiresIn: '1hr'})
    
    res.json({token})
})

router.get('/verify/:token',(req,res) => {
    const data = req.params
    jwt.verify(data.token, SECRET,(err, tdata) =>{
        if (err) {
           res.json({err:err.message})
        }
        res.send(` token verify status = ${tdata.data.userId, tdata.data.username }`)
    })

})


module.exports = router