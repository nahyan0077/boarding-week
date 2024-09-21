function* generatorFibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;  //this ; is important here
        [a, b] = [b, a + b];
    }
}

const fib = generatorFibonacci();

console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)

