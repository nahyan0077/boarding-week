const fs = require('fs');

const rStream = fs.createReadStream('name.txt')

const wStream = fs.createWriteStream('name.txt')

wStream.write("its piped")

rStream.pipe(wStream)

rStream.on('end',()=>{
    console.log("piping commplete");
})