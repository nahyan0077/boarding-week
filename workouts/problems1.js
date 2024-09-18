//find factorial of a number using recursioin

function fact(n) {
    if (n <= 1) {
        return n
    }
    return n * fact(n - 1)
}

console.log(fact(5));


//check prime

function checkPrime(n){
    if (n <= 1) {
        return false
    }
    for(let i = 2; i < Math.sqrt(n); i++){
        if (n % i == 0) {
            return false
        }
    }
    return true
}

console.log(checkPrime(-14));

//Largest element in a nested array

function largestInNestedArray(arr) {
    let ele = -Infinity
    for(let i = 0; i < arr.length; i++){
        if (!Array.isArray(arr[i])) {
            ele = Math.max(ele, arr[i])
        }else{
            ele = Math.max(ele, largestInNestedArray(arr[i]))
        }
    }
    return ele
}

const arr = [1, [4, 6], [5, [7, 3], 8], 2];
console.log(largestInNestedArray(arr));


//print all fibonacci sequences upto n

function fibonacci(n) {
    if (n <= 0) {
        return []
    }
    if (n == 1) {
        return [0]
    }
    if (n == 2) {
        return [0]
    }
    let res = [0, 1]
    for(let i = 2; i < n; i++){
        res.push(res[i - 1] + res[i - 2])
    }
    return res
}

console.log(fibonacci(5));


//Make first letters capitals

let str = "my name is nahyan"

function firstCap(str) {

     str = str.split(' ')
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join(" ")
}

console.log(firstCap(str));



