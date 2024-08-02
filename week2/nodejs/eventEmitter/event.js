const eventEmitter = require('events');   

const myEmitter = new eventEmitter()

myEmitter.on('call' ,() =>{
    console.log("this is call event ");
})

myEmitter.once('call-once', () =>{
    console.log('this will be called at once only');
})

myEmitter.emit('call')
myEmitter.emit('call')
myEmitter.emit('call')
myEmitter.emit('call-once')
myEmitter.emit('call-once')


//remves individul listeners
myEmitter.removeListener('call')


myEmitter.removeAllListeners()

//this won't be called further
myEmitter.emit('call')
myEmitter.emit('call')
myEmitter.emit('call')
myEmitter.emit('call-once')
myEmitter.emit('call-once')