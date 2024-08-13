const {Worker} = require('worker_threads');

const worker = new Worker('./worker11.js')

worker.on('message', (msg) => {
    console.log(msg);
})

worker.postMessage("hello worker")

