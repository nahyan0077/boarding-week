const {fork} = require('child_process');

const child = fork('demo.js')

child.on("message",(message) => {
    console.log("mag from child :-->",message);
})

child.send({message: "msg from parent"})