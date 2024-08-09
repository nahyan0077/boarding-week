console.log("log1");


setTimeout(()=>console.log("time out 1"),0)

console.log("log2");

process.nextTick(()=>{
    setTimeout(()=>{
        console.log("timeoout 2");
        setTimeout(()=>{
            console.log("kello 1");
            setTimeout(()=>{
                console.log("kello 2");
                
            })
        })
    },1000)
    console.log("next tick 1")
})

console.log("log3");


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runAsyncTasks() {
//     console.log("log1");

//     setTimeout(() => console.log("time out 1"), 0);

//     console.log("log2");

//     await new Promise(resolve => process.nextTick(resolve));

//     console.log("next tick 1");

//     await delay(1000);
//     console.log("timeoout 2");

//     await delay(0); // Mimicking setTimeout with no delay
//     console.log("kello 1");

//     await delay(0); // Mimicking setTimeout with no delay
//     console.log("kello 2");

//     console.log("log3");
// }

// runAsyncTasks();
