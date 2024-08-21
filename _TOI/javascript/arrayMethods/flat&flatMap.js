let arr = [3,5,6,4,6,3,,6,43,7,9,4]

let x = arr.flatMap(x => [x, Math.pow(x,2)])

console.log(x);
