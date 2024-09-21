const http = require('http');
const cluster = require('cluster');
const os = require('os');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('hello cluster')
})


if (cluster.isMaster) {
    const cpu = os.cpus()

    for(let i  = 0; i < cpu.length - 1; i++){
        cluster.fork()
    }

    cluster.on('exit', (worker) =>{
        console.log(`worker ${worker.process.pid} died createed new`);
        cluster.fork()
    })

}else{

    server.listen(3000, () => {
        console.log("server connected ");
        
    })
}

