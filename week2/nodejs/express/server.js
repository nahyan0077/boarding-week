const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cluster = require('cluster');
const os = require('os');
const session = require('express-session');
const { Worker } = require('worker_threads')
const { connect } = require('./connect');
const jwtRouter = require('./router/newRouter');
const queryRouter = require('./router/queryRouter');
// const cronjob = require('./cron');
const cors = require('cors');

connect()
// cronjob.start()

const corsOptions = {
    origin: ['https://www.drop-ship.shop'],
    methods: 'GET,POST,PUT,PATCH'
}


const app = express()

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(morgan('dev'))
const PORT = 4000
app.use(express.urlencoded({ extended: true }))

// app.use(session({
//     secret: 'mysessionsecret',
//     resave: false,
//     saveUninitialized: false,
// }))

app.use(session({
    secret: "mysessionsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true }
}))


app.use('/valid', jwtRouter)
app.use('/query', queryRouter)


function logger(req, res, next) {
    console.log(req.query, "===>>>this logger");
    next()
}

app.use(logger)

app.get('/', (req, res) => {
    // console.log(req.headers);
    res.json({
        sucess: true,
        message: "Express ok"
    })
})

//fs

app.get('/create', (req, res) => {
    fs.writeFile('new.txt', "hello nahyan", (err) => {
        if (err) {
            console.log(err);
            res.json({ massage: "file creation error" })
        } else {
            console.log("file created successfully");
            res.json({ massage: "file created" })
        }
    })
})
app.get('/read', (req, res) => {
    fs.readFile('new.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({ massage: "file read error" })
        } else {
            console.log("file read successfully");
            res.json({ massage: "file read", data: data })
        }
    })
})

app.get('/append', (req, res) => {
    fs.appendFile('new.txt', "this is appended", (err) => {
        if (err) {
            console.log(err);
            res.json({ error: err })
        } else {
            console.log("file appended");
            res.json({ message: "file appended" })
        }
    })
})

app.get('/delete',(req,res) => {
    fs.unlink('new.txt' ,(err) => {
        if (err) {
            res.json({err})
        }else{
            res.json({success: "deleted"})
        }
    })
})


//path 
app.get('/path', (req, res) => {
    console.log(__dirname);
    res.json({ message: `${__dirname}  ${__filename}` })
})


//render and app.locals()

app.locals.myName = 'nahyan'

app.get('/render', (req, res) => {

    res.cookie('myName', 'nahyan')
    res.sendFile(path.join(__dirname, 'view', 'page.html'))
})

app.post('/login', (req, res) => {
    console.log(req.headers);
    console.log(req.cookies);
    console.log(req.body);
    res.redirect('/')
})

app.get('/clear-cookies', (req, res) => {
    res.clearCookie('myname')
    res.send('cookie cleared')
})

app.get('/safe-cookie', (req, res) => {
    res.cookie('safe-cookie', 'THISISTHESECRET', { maxAge: 60000, httpOnly: true })
    res.send("safe cookie created")
})

app.get('/new-cookie', (req, res) => {
    let data = {
        name: "nahyan",
        age: 25
    }
    res.cookie('mycookie', JSON.stringify(data))
    res.send("new cookie set")
})

app.get('/get-cookie', (req, res) => {
    let cookieData = req.cookies.mycookie
    console.log(cookieData);

    res.json({ cookieData })
    // res.send("working")
})



//session

app.get('/session-view', (req, res) => {
    if (!req.session.views) {
        req.session.views = 1
    } else {
        req.session.views++
    }
    res.send(`total views : ${req.session.views}`)
})




//middleware

app.get('/middle', (req, res) => {
    console.log("reached here");
    res.json({ success: true })
})



//child process ===>> cluster

if (!cluster.isMaster) {
    let cpu = os.cpus().length

    for(let i = 0; i < cpu - 1; i++ ){
        cluster.fork()
    }

    cluster.on('exit' ,(worker) => {
        console.log("worker ",worker.process.pid, " stopped");
        
    })

}else{
    app.listen(4000, () => {
        console.log("server listening to the port 4000");
    })
}



