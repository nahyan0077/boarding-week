// 9
// 13+9+1 = 23
// 5+13+9+1+2 = ..
// 2+5+13+9+1+2+3 = ..
// -1+2+5+13+9+1+2+3+-2 = ..

const ab = [-1,2,5,13,9,1,2,3,-2]
let x = 5
for(let i = 0; i < 5; i++){
    let str = ""
    x--
    let b = x
    let sum = 0
    for(let j = 0; j < 2 * i + 1; j++){
        str += ab[b]  + " + "
        sum += ab[b]
        b++
    }
    console.log(str.slice(0,-2) + " = " + sum)
}