
// process.on('message' ,(msg) =>{
//     console.log(msg, "  msg from parent");
// })
// process.send("fork send")


process.on('message',(msg) =>{
    console.log("from parent--->",msg);
})

process.send("to parent")