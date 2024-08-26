// 10 = 10
// 10 + 1 +  = 11
// 10 + 9 + 2 + 1 +  = 22
// 10 + 9 + 8 + 3 + 2 + 1 +  = 33
// 10 + 9 + 8 + 7 + 4 + 3 + 2 + 1 +  = 44
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 +  = 55
// 10 + 9 + 8 + 7 + 4 + 3 + 2 + 1 +  = 44
// 10 + 9 + 8 + 3 + 2 + 1 +  = 33
// 10 + 9 + 2 + 1 +  = 22
// 10 + 1 +  = 11
// 10 = 10

let arr = [10,9,8,7,6,5,4,3,2,1]
let a = -1
let b = 0
let d = 0
let e = 5
for(let i = 0; i < 10;i++ ){
    let str = ""
    let x = 10
    a++
    b++
    let c = b
    let sum = 0
    i > 5 ? d=d+2 : 0
    i > 5 ? e-- : 0
    let k = e
    for(let j=0; j <= 10; j++){
        if (i <= 4) {
            if (j <= 2 * i + 1 ) {
                if (j <= a) {
                    str += x + " + "
                    sum += x
                    x--
                }else{
                    str += c + " + "
                    sum += c
                    c--
                }
            }
        }else{
            if (j <= 9 - d ) {
                if (j <= i - d - 1 ) {
                    str += x + " + "
                    sum += x
                    x--
                }else{
                    str += k + " + "
                    sum += k
                    k--
                }
            }
            
        }
    }
    console.log(str.slice(0,-2) + " = "+ sum)
}