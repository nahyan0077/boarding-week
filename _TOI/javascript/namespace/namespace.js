//var should be used while creating namespace

var myNameSpace = myNameSpace || {}

myNameSpace.utils = {
    add:  (a, b) => {
        return a + b
    },
    multiply: (a, b) => {
        return a * b
    }
}

console.log(myNameSpace.utils.add(10,20));
console.log(myNameSpace.utils.multiply(5,3));
