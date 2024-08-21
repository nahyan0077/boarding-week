let nestedArray = [1, [2, [3, 4], 5], 6];

function flattenArray(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            res = res.concat(flattenArray(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flattenArray(nestedArray))