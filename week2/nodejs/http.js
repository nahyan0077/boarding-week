// const http = require('http');


// const server = http.createServer((req,res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','utf-8', 'text/plain');
//     res.end('Hello World he');
// })

// server.listen(3000,() =>{
//     console.log("http server connected at 3000");
// })

// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/plain')
//     res.end('server set up')
// })

// server.listen(3004,()=>{
//     console.log("http server connected");
    
// })


const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'utf-8'})
    fs.readFile('read.txt',(err, data) => {
        if (err) {
            res.write(err.message)
        }else{
            res.write('data read successfully'+data)
        }
        res.end()
    })
})

server.listen(3004,()=>{
    console.log("server connected to port 3004");
})