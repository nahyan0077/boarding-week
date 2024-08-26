function print1toN(n) {
    if (n <= 0) {
        return
    }
    print1toN( n - 1 )
    console.log(n);
}

print1toN(10)

console.log("==========");


function printNto1(n) {
    if (n <= 0) {
        return
    }
    console.log(n);
    printNto1( n - 1 )
}

printNto1(10)

console.log("===========");

function nNums(n) {
    if (n <= 0) {
        return n
    }
    console.log(n)
    nNums(n - 1)
}


nNums(10)