const { parentPort } = require('worker_threads');

function sum() {
    let sum = 0
    for(let i = 0; i < 1e9; i++){
        sum += i
    }
    return sum   
}

parentPort.on('message',(msg) => {
    console.log(msg);
    
    let res = sum()
    
    parentPort.postMessage("this is result"+ res)
})

