
let str = "sdfgshelrlodfgdfhellogasdfasdhellofhello"
let count = 0
let qry = 'hello'
for(let i = 0; i < str.length; i++){
    if(str[i] == qry[0]){
        let temp = false
        for(let j = 0 ; j < qry.length; j++){
            if(str[i] == qry[j]){
                temp = true
                i++
            }else{
                temp = false
                break
            }
        }
        if(temp == true){
            count++
        }
    }
}
console.log(count)