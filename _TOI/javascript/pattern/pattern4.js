// 10+9+8+7+6+5+5+6+7+8+9+10 = 90
// 10+9+8+7+6+6+7+8+9+10 = 80
// 10+9+8+7+7+8+9+10 = 68
// 10+9+8+8+9+10 = 54
// 10+9+9+10 = 38
// 10+10 = 20

let a = 7
for(let i = 0; i < 6; i++){
    let str = ""
    let x = 10
    a--
    let b = 5 + i
    let sum = 0
    for(let j = 0; j < 12; j++){
        if (j < a) {
            str += x + " + "
            sum += x
            x--
        }
        else if(j < 12 - 2 * i ){
            str += b + " + "
            sum += b
            b++
        }
    }
    console.log(str.slice(0,-2) + " = " + sum)
}