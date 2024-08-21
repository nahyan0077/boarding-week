function abc(x) {
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            if (x == 10) {
                res("currect")
            } else {
                rej("rejected")
            }
        }, 3000);
    })
    return prom
}

async function logger() {
    let aw = await abc(10)
    console.log(aw);
    console.log("printed");
}

// logger()


function div (a, b){
    let prom = new Promise((res, rej) =>{
        if (a + b > 10) {
            res(a + b)
        }else{
            rej("invalid")
        }
    })
    return prom
}

// div(5,4).then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })



function promise1(x) {
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            if(x == 10){
                res("promise1 resolved")
            }else{
                rej("promise 1 rejected")
            }
        }, 3000);
    })
    return prom
}
function promise2(x) {
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            if(x == 10){
                res("promise2 resolved")
            }else{
                rej("promise2 rejected")
            }
        }, 1000);
    })
    return prom
}


Promise.all([promise1(0), promise2(10)])
.then((res) => {
    console.log(res);
}).catch((error)=>{
    console.log(error);
})




Promise.any([promise1(0), promise2(10)])
.then((res) => {
    console.log(res);
}).catch((error)=>{
    console.log(error);
})


Promise.allSettled([promise1(0),promise2(10)])
.then((res) => {
    console.log(res);
})


Promise.allSettled([promise1(0),promise2(10)])
.then((res) => {
    console.log(res);
})

