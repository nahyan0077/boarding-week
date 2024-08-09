const fs = require('fs');

setTimeout(() => console.log("Timeout"), 0);

setImmediate(() => console.log("immediate"))

console.log("log");

fs.readFile('test.txt', 'utf-8', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("read completet");
    setTimeout(() => console.log("timeout 2"), 0)
    setTimeout(() => console.log("timeout 3"), 2000)
    setImmediate(() => console.log("immedite 2")
    )
})

