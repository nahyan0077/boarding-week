const {parentPort} = require('worker_threads')

function add() {
    let sum = 0
    for(let i = 0; i < 1e9; i++){
        sum += i
    }
    return sum
}

let result = add()

parentPort.postMessage(result)