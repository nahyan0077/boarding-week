//polyfills of reduce

let arr1 = [1,2,3,4,5]

Array.prototype.myMap = function (callback) {
    let newArr = []
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i], i, this))
    }
    return newArr
}

console.log(arr1.myMap(ele => ele * 3));

//polyfills of reduce

Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue
    for(let i = 0; i < this.length; i++){
        acc = callback(acc, this[i], i, this)
    }
    return acc
}

//polyfills of filter

Array.prototype.myFilter = function (callback) {
    let newArr = []
    for(let i = 0; i < this.length; i++){
        console.log(callback(this[i], i, this))
        if(callback(this[i], i, this)){
            newArr.push(this[i])
        }
    }
    return newArr
}

let arr2 = [1,2,3,4,5]

console.log(arr2.myFilter(ele => ele == 2));
