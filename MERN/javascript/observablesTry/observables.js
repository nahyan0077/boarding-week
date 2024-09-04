const {Observable} = require('rxjs');


//observbles are a part of reactive programming and its used to handle the asynchronous operations in javascript



function oberv() {
    return new Observable (subscriber=>{
        setTimeout(() => {
            subscriber.next(1)
            subscriber.next(2)
        }, 1000);

    })
}

const observable = oberv()

observable.subscribe((res)=>{
    console.log(res);
})

