function prom1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("prom1 res")
        }, 3000);
    })
}
function prom2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("prom2 res")
        }, 3000);
    })
}
function prom3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("prom3 res")
        }, 2000);
    })
}

async function result() {
    
    await Promise.allSettled([prom1(),prom2(),prom3()])
    .then((res) =>{
        console.log("success: ",res);
        
    })
    .catch((err) =>{
        console.log("error: ",err);
        
    })
    
}


result()
