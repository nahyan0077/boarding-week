let arr = [1,23,4,5,4,6,23,23,78]

console.log(arr.map((ele, i) => ele + i));



//This is the polyfill of map() method in js
// ==>> check first the if map is not exists in the prototype

// if (!Array.prototype.map) {
    
    Array.prototype.myMap = function (func) {
        let newArr = []
        for(let i = 0; i < this.length; i++){
            newArr.push(func(this[i], i, this))
        }
        return newArr
    }
    
    let polifill = arr.myMap((ele) => ele * 3)
    
    console.log(polifill);
// }


//polyfill of filter

Array.prototype.myFilter = function (func) {
    let newArr = []
    for(let i = 0; i < this.length; i++){
        if(func(this[i], i , this)){
            newArr.push(this[i])
        }
    }
    return newArr
}

console.log(arr.myFilter((ele) => ele % 2 == 0));




//polyfill of reduce

let arr1 = [1,2,3,4,5]
Array.prototype.reduce = null

Array.prototype.myReduce = function (func, initialValue = null){
    let acc = initialValue
    for(let i = 0; i < this.length; i++){
        acc = func(acc, this[i], i, this)
    }
    return acc
}

console.log(arr1.myReduce((acc, curr) => acc + curr ,0));
