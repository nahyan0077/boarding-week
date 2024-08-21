function sum(...args) {
    let sum = 0
    for(let num of args){
        sum += num
    }
    return sum    
}

console.log(sum(2,4,5,6,6))