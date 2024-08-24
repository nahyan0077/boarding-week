for(let i = 0; i < 5; i++){
    let x = 11
    let str = ""
    let sum = 0
    let c = i + 1
    for(let j = 0; j <  2*i ; j++){
        if(j <= Math.ceil(i/2)){
            x--
            str += x + "  "
            sum += x
        }else{
            c--
            str += c + "  "
            sum += c
        }
    }
    console.log(str+ " = "+sum)
}