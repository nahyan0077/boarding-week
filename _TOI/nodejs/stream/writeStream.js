const fs = require('fs');


const wStream = fs.createWriteStream('name.txt')

wStream.write("new write stream")

wStream.end()

wStream.on('finish',()=>{
    console.log("finished");
    
})