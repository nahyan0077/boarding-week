const express = require('express');
const app = express()
const fs = require('fs');
const path = require('path');
const cluster = require('cluster');
const os = require('os');
const jwt = require('jsonwebtoken');
const session = require('express-session');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret : 'helooo',
    resave: false,
    saveUninitialized: true
}))


function sum(req, res, next) {
    let {a, b} = req.query
    if (a && b) {
        let sum = Number(a) + Number(b)
        req.sum = sum
        next()
    }else{
        res.send("error")
    }
}

app.get('/',(req,res)=>{
    res.send("Home")
})


app.get('/middle',sum,(req,res)=>{

    const filePath = path.join(__dirname, 'sum.txt')

    fs.writeFile('sum.txt',"This is the sum =   "+req.sum,'utf8',(err)=>{
        if (err) {
            res.send("file write error")
        }else{
            res.sendFile(filePath)
        }
    })
    // res.sendFile(req.filePath)
    // res.send("middle ")
    // res.send("middle "+ req.totalSum)
})
const secret = "haiheloobro"
app.get('/jwt/:pass',(req,res)=>{
    const {pass} = req.params
    const data = {
        name: 'nahyan',
        pass
    }
    console.log(pass);
    const token = jwt.sign( data, secret )
    res.send(token)
})

app.get('/verify/:token',(req,res)=>{
    const {token} = req.params
    res.send(jwt.verify(token,secret))
})

app.get('/session',(req,res)=>{
    req.session.name = "nahyan"
    res.send("session set")
})

app.get('/get-session',(req,res)=>{
    res.send(req.session.name ? req.session.name : "no session")
})


if (!cluster.isMaster) {
    const cpuLen = os.cpus().length
    for(let i = 0; i < cpuLen-4; i++){
        cluster.fork()
    }

    cluster.on('exit',(worker)=>{
        console.log("process exits  "+ worker.process.pid);
        cluster.fork()
    })

}else{
    
    app.listen(3000, ()=>{
        console.log("Listning to 3000");
    })

}
