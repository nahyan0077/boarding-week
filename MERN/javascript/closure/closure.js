//using closure createting a private counter


function counter() {
    let count = 0
    return {
        incre: (incre) => count += incre,
        print: () => count
    }
}

const result = counter()


console.log(result.incre(1));
console.log(result.incre(1));
console.log(result.incre(1));


console.log(result.print());