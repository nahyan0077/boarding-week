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






