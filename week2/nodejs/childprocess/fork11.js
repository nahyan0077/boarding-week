const {fork} = require('child_process');

const child = fork('child11.js')

child.on('message',(msg)=>{
    console.log("chid msg  ==>  "+ msg);
})

child.send("hi child")