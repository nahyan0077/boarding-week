

setTimeout(() => {
    console.log("timer 1");
}, 1000);

setTimeout(() => {
    console.log("timer 2");
}, 2000);

setImmediate(() => {
    console.log("immediate");
})

process.nextTick(() =>{
    console.log("next tick");
})

setTimeout(() => {
    console.log("time out 0");
}, 0);



console.log("hello1");