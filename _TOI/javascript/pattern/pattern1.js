console.log("10 = 10")
let k = 0
let b = 5
for (let i = 1; i <= 9; i++) {
    let str = "";
    let x = 10;
    let sum = 0;
    let c = i + 1;
    let z = 1
    i > 5 ? b--:1
    i > 5 ? k++:1
    let r = b
    for (let j = 1; j <= 2 * i ; j++) {
        if (i<=5) {
            if (j <= i) {
                sum += x;
                str += x + " + " ;
                x--;
            } else {
                c--;
                sum += c;
                str += c + " + " ;
            }
        }else{
            if (j <=  10 - 2  * k ) {
                if (j <= 10 - i) {
                    sum += x;
                    str += x + " + " ;
                    x--;
                } else {
                    sum += r;
                    str += r + " + " ;
                    r--
                }
            }
        }
    }
    console.log(str + " = " + sum);
}
console.log("10 = 10")