function sumOfEven(n) {
    if (n <= 1) {
        return 0
    }
    return sumOfEven(n - 1) + (n % 2 == 0 ? n : 0)
}

console.log(sumOfEven(5));


function sumOfEven1(n,sum = 0) {
    if (n <= 1) {
        return sum
    }
    sum += n % 2 == 0 ? n : 0
    return sumOfEven1(n - 1,sum)
}

console.log("bew  ",sumOfEven1(6));
