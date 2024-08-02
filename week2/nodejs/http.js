const http = require('http');


const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','utf-8', 'text/plain');
    res.end('Hello World he');
})

server.listen(3000,() =>{
    console.log("http server connected at 3000");
})