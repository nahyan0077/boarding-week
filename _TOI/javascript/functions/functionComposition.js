function composition(a, b) {
    return function temp(x, y) {
        return a(b(x, y))
    }
}

function add(x) {
    return x
}

function multiply(x, y) {
    return x * y
}

const combi = composition(add, multiply)

console.log(combi(10, 20))

