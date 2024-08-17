function sumOfDigits(n) {
    let sum = 0
    while (n > 0) {
        let s = n % 10
        sum += s
        n = Math.floor(n / 10)
    }
    return sum
}

console.log(sumOfDigits(1234));

//in recursion

function sumOfDigRecu(n) {
    if (n == 0) {
        return 0
    }
    return (n % 10) + sumOfDigRecu(Math.floor(n / 10))
}

console.log(sumOfDigRecu(1234));
