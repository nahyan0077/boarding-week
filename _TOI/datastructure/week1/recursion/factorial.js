// function fact(n) {
//     if (n <= 2) {
//         return n
//     }
//     return n * fact(n - 1)
// }

// console.log(fact(6));


function fact(n) {
    if (n <= 2) {
        return n
    }
    return n * fact(n - 1)
}

console.log(fact(5));