const fs = require('fs');

// const readableStream = fs.createReadStream('writable.txt',{encoding: 'utf8'})
// const writableStream = fs.createWriteStream('pipe.txt')

// readableStream.pipe(writableStream)

// readableStream.on('end' ,() =>{
//     console.log('Reading streams completed..');
// })


const rstream = fs.createReadStream('text.txt',{encoding: 'utf8'})
const wstream = fs.createWriteStream('writtable.txt')

rstream.pipe(wstream)

rstream.on('end',()=>{
    console.log("all finish");
    
})