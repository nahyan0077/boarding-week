const fs = require('fs');



fs.appendFile('./_TOI/nodejs/express/sum.txt',"   this is appended",(err,data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})
fs.readFile('./_TOI/nodejs/express/sum.txt','utf8',(err, data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})

fs.unlink('./_TOI/nodejs/express/sum.txt',(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("file deleted");
        
    }
})

