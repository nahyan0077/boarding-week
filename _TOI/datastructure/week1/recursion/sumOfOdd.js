function oddSum(n) {
    if (n <= 1) {
        return 1
    }
    return oddSum(n - 1) + (n % 2 != 0 ? n : 0)
}

console.log(oddSum(5));


function sumOfOdd1(n, sum = 0) {
    if (n <= 0 ) {
        return sum
    }
    sum += n % 2 !== 0 ? n : 0
    return sumOfOdd1(n - 1, sum)
}

console.log(sumOfOdd1(5));
