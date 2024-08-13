// const fs = require('fs');

// const readableStream = fs.createReadStream('testvid.mp4' )

// readableStream.on('data',(chunk) =>{
//     console.log("Received :", chunk.length);
// })

// readableStream.on('end', () =>{
//     console.log('all data read');
// })

// const fs = require('fs');

// const rstream = fs.createReadStream('testvid.mp4')

// rstream.on('data',(chunk) =>{
//     console.log("chunk length --> ",chunk.length);
    
// })

// rstream.on('end',() => {
//     console.log("all read complete");
    
// })


const fs = require('fs');

const readStream = fs.createReadStream('test.txt')

readStream.on('data', (chunks) => {
    console.log(chunks.length);
})

readStream.on("end", () => {
    console.log("all read stream ended");
})
