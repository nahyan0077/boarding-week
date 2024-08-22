const {fork} = require('child_process');

const worker = fork("./worker.js")

worker.on('message',(msg)=>{
    console.log(msg);
    
})

worker.send('Hellooo')