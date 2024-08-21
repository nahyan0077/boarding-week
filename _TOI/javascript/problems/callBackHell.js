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