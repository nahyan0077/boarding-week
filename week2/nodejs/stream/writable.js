// const fs = require('fs');

// const writableStream = fs.createWriteStream('writable.txt')

// writableStream.write("This is first   ---- >>>  ")
// writableStream.write("now its second")

// writableStream.on('finish', () =>{
//     console.log('all writting finished...');
// })


// const fs = require('fs');

// const wstream = fs.createWriteStream('writtable.txt')

// wstream.write("new one this is adding 11,")

// wstream.on('finish',() => {
//     console.log("all finish..."); 
// })



const fs = require('fs');

const writeStream = fs.createWriteStream('writable11.txt')

writeStream.write("This is the text added to write")

writeStream.end()

writeStream.on('finish',() => {
    console.log("all writting finished");
})