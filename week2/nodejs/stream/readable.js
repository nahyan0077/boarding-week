const fs = require('fs');

const readableStream = fs.createReadStream('testvid.mp4' )

readableStream.on('data',(chunk) =>{
    console.log("Received :", chunk.length);
})

readableStream.on('end', () =>{
    console.log('all data read');
})