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


//first non-repleating element in the array

let arr1 = [-2, 3, -2, 3, 1]
let map = new Map()
for(let i = 0; i < arr1.length; i++){
    if(map.has(arr1[i])){
        map.set(arr1[i], map.get(arr1[i]) + 1)
    }else{
        map.set(arr1[i], 1)
    }
}


console.log([...map.entries()].sort((a,b)=>a[1]-b[1])[0][0])

//find out the smallest number that is repeated exactly ‘k’ times 

let arr2 = [2, 1, 4, 4, 3, 1, 2, 2, 4]
let k = 3
let map1 = new Map()
for(let i = 0; i < arr2.length; i++){
    if(map1.has(arr2[i])){
        map1.set(arr2[i], map1.get(arr2[i]) + 1)
    }else{
        map1.set(arr2[i], 1)
    }
}

console.log([...map1.entries()].filter((ele)=>ele[1] == k).map(ele1=>ele1[0]));
