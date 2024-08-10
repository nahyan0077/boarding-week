//cpu intensive tasks

const crypto = require('crypto');
const {parentPort} = require('worker_threads');



function heavy() {
    let date = new Date()
    crypto.pbkdf2('pass1','salt1' , 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - date} ms   pass1`);
    
    })
    crypto.pbkdf2('pass2','salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - date} ms   pass2`);
    
    })
    crypto.pbkdf2('pass3','salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - date} ms   pass3`);
    
    })
    crypto.pbkdf2('pass4','salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - date} ms   pass4`);
    
    })
    crypto.pbkdf2('pass5','salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - date} ms   pass5`);
    
    })
    crypto.pbkdf2('pass6','salt1', 100000, 1024, 'sha512', () => {
        console.log(`${Date.now() - date} ms   pass6`);
    
    })
    console.log(date, "worker console");
    
    
    return new Date 
}
const endDate = heavy();

parentPort.on('message', (msg) => {
    console.log(msg, '==== on worker');

});

parentPort.postMessage(`Heavy process${endDate}`);

