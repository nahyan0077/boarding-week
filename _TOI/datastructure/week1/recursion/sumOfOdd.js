function oddSum(n) {
    if (n <= 1) {
        return 1
    }
    return oddSum(n - 1) + (n % 2 != 0 ? n : 0)
}

console.log(oddSum(5));
