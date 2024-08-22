const fs = require('fs');


const rStream = fs.createReadStream('./name.txt')


rStream.on('data',(chunks)=>{
    console.log(chunks.length);
    
})

rStream.on('error',(err)=>{
    console.log(err);
})

rStream.on('end',()=>{
    console.log("ended");
    
})