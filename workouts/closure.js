
function createBase(x) {
    return function (y) {
        return x + y
    }
}



let addSix = createBase(6)

console.log(addSix(10))  //16
console.log(addSix(21)) //27

var a = 1
function add() {
    if (a) {
        var a = 10
    }
    console.log(a);
}
add()