// const eventEmitter = require('events');   

// const myEmitter = new eventEmitter()

// myEmitter.on('call' ,() =>{
//     console.log("this is call event ");
// })

// myEmitter.once('call-once', () =>{
//     console.log('this will be called at once only');
// })

// myEmitter.emit('call')
// myEmitter.emit('call')
// myEmitter.emit('call')
// myEmitter.emit('call-once')
// myEmitter.emit('call-once')


// //remves individul listeners
// myEmitter.removeListener('call')


// myEmitter.removeAllListeners()

// //this won't be called further
// myEmitter.emit('call')
// myEmitter.emit('call')
// myEmitter.emit('call')
// myEmitter.emit('call-once')
// myEmitter.emit('call-once')


const eventEmitter = require('events')

const event = new eventEmitter()

event.on('call' ,() =>{
    console.log("call event");
})

event.once('once',()=>{
    console.log("its once");
})

event.emit('call')   
event.emit('call')   
event.emit('call')   

event.emit('once')
event.emit('once')

