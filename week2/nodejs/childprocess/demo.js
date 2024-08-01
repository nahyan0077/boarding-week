
process.on('message' ,(msg) =>{
    console.log(msg, "  msg from parent");
})
process.send("fork send")