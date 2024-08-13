process.on('message',(msg)=>{
    console.log("parent msg  ===>  "+ msg);    
})

process.send("hi parent proces")