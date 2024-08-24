// 2+5+23+9+1+2 = 42
// 2+5+23+9+1 = 40
// 2+5+23+9 = 39
// 2+5+23 = 30
// 2+5 = 27
// 2 = 2
const ab=[2,5,23,9,1,2]

let x = ab.length - 1

for(let i = 0; i < 6; i++){
    let str = ""
    let sum = 0
    let k = 0
    for(let j = 0 ; j < 6 - i ; j++){
        if (j < 6) {
            str += ab[k] + " + "
            sum += ab[k]
            k++
        }
    }
    console.log(str + " = " + sum)
}

