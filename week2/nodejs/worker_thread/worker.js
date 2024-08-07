// const {parentPort} = require('worker_threads');

// parentPort.on('message', (msg) => {
//     console.log("massgae from main: " + msg);
// })

// parentPort.postMessage('This is worker')

const {parentPort} = require('worker_thread');

parentPort.on('message',(msg) => {
    console.log('from parent',msg);
})

parentPort.postMessage("hello main")