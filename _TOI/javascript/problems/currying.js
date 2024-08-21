function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}


let x = currying(10)
let y = x(20)
let z = y(30)

console.log(z)


