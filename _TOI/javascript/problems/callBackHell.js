//callback hell

getUserData(userId,  (user) => {
    getUserOrders(user.id, (orderId) => {
        getProducts(orderId, (productId) => {
            console.log("productId", productId);
        })
    })
}) 


getUserData(userId).then((res) =>{
    console.log(res);
    return getUserOrders(user.id).then((res) =>{
        console.log(res);
        return getProducts(prouductId)
    })
})


getUserData(userid).then((userid) => {
    console.log("hello");
    return getUserOrders(user.id).then((res) =>{
        return getProducts(orderId)
    })
})


function a(cb) {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
function b(cb) {
    return new Promise((resolve, reject) => {
        resolve()
    })
    
}
function c(cb) {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

a(()=>{
    b(()=>{
        c(()=>{

        })
    })
})


a().then(()=>{
    b().then(()=>{
        c().then(()=>{

        })
    })
})

const [a,b,c] = await Promise.all([a(),b(),c()])

function a(cb) {
    cb()
}
function b(cb) {
    cb()
}
function c(cb) {
    cb()
}

a(()=>{
    b(()=>{
        c(()=>{

        })
    })
})


    
function a() {
    return new Promise((res,rej) => {
        res()
    })
}
function b() {
    return new Promise((res,rej) => {
        res()
    })
}
function c() {
    return new Promise((res,rej) => {
        res()
    })
}

a()
    .then(()=> b())
    .then(()=> c())
    .catch(err=>{
        console.log(err);
        
    })

  async  function execute() {
        try {
            await a()
            await b()
            await c()
        } catch (err) {
            console.log(err);
            
        }
    }


    async function test() {
        let a = await a()
        let b = await b()
        let c = await c()
    }

    function prom() {
        return new Promise((res, rej) => {
            res()
        })
    }