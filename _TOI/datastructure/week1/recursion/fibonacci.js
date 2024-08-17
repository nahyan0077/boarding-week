function fibo(n) {
    if (n <= 1) {
        return n
    }
    return fibo(n - 1) + fibo( n - 2 )
}

console.log(fibo(3));

console.log("=========");
console.log("=========");


function fibonacci(n) {
    let a = -1
    let b = 1
    for(let i = 0; i <= n; i++){
        let c = a + b
        console.log(c)
        a = b
        b = c
    }
    return b
}


console.log("nth fibo   :  ",fibonacci(6))