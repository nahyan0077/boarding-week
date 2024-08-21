let num = 9456547567
let max = -Infinity
let i = 0
while (num > 0 ) {
    let x = num % 10
    if(x > max){
        max = x
    }
    num = num / 10
    i++
}
console.log(Math.floor(max));

