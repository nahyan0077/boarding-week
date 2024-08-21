function innerArr(n) {
    let i = 0
    let arr = [[]]
    
        
        if(Array.isArray(arr[0])){
            arr[0] = [] 
        }else{
            i++
        }
        return arr
}

console.log(innerArr(3));
