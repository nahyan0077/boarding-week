//find most repeted element in the array

let arr = [3,3,3,31, 3, 1, 3, 2, 1, 2,2,2]

function mostRepeted(arr) {
    let rept = null
    let count = -Infinity
    let freq = {}
    for(let i = 0; i < arr.length; i++){
        if (!freq[arr[i]]) {
            freq[arr[i]] = 1
        }else{
            freq[arr[i]] = freq[arr[i]] + 1
        }
        if(freq[arr[i]] > count){
            count = freq[arr[i]]
            rept = arr[i]
        }
    }
    return rept
}

console.log(mostRepeted(arr));

console.log("==========");



for (let i = 0; i < 6; i++) {
    // x = i++
    y = ++i
    // console.log(x,"  i++",i)
    console.log(y,"  ++i",i)
}


