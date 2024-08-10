const crypto = require('crypto');
const { Worker } = require('worker_threads');

const worker = new Worker('./evntLoopWorker.js')

worker.on("message", (msg) => {
    console.log(msg, "=== at main");

})


console.log("logg");

setTimeout(() => console.log("timeout"), 5000)
setImmediate(() => console.log("immediate"))

worker.postMessage("its main ")