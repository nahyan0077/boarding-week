const {parentPort} = require('worker_threads');

parentPort.on('message', (msg) => {
    console.log("massgae from main: " + msg);
})

parentPort.postMessage('This is worker')