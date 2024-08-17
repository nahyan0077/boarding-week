function sumOfEven(n) {
    if (n <= 1) {
        return 0
    }
    return sumOfEven(n - 1) + (n % 2 == 0 ? n : 0)
}

console.log(sumOfEven(5));
