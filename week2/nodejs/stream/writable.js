const fs = require('fs');

const writableStream = fs.createWriteStream('writable.txt')

writableStream.write("This is first   ---- >>>  ")
writableStream.write("now its second")

writableStream.on('finish', () =>{
    console.log('all writting finished...');
})