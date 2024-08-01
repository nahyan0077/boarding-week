// function checkEven(n) {
//     if (n == 0) return true
//     if (n == 1) return false
//     return checkEven(n - 2)
// }

// console.log(checkEven(10));
// console.log(checkEven(11));

// function checkOdd(n) {
//     if (n == 0) return false
//     if (n == 1) return true
//     return checkOdd(n - 2)
// }

// console.log(checkOdd(10));
// console.log(checkOdd(11));


function checkEven(n) {
    if (n == 1 ) return false
    if (n == 0 ) return true
    return checkEven( n - 2)
}

console.log(checkEven(11));


function checkOdd(n) {
    if (n == 1 ) return true
    if (n == 0 ) return false
    return checkOdd( n - 2)
}

console.log(checkOdd(11));