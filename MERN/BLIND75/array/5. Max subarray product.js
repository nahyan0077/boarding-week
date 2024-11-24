let arr = [-2,3,-4]
//let maxPrdkt = -2 => -2 =>  8 
//let minPrdkt = -2 => -6 => 24
//let max      = -2 => -2 => 24

function maxPrdktSubArr(arr) {
    let maxPrdkt = arr[0]
    let minPrdkt = arr[0]
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let tempMax = maxPrdkt
        //keeping track of max
        maxPrdkt = Math.max(arr[i], tempMax * arr[i], minPrdkt * arr[i])
        
        //keeping track of min as negatives exists in the array
        minPrdkt = Math.min(arr[i], tempMax * arr[i], minPrdkt * arr[i])
        max = Math.max(max, maxPrdkt)
    }
    return max
}
console.log(maxPrdktSubArr([-2, 3, -4]));


function maxSubArrayPrdkt(arr) {
    let curr = arr[0]
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        curr = Math.max(curr * arr[i], arr[i])
        max = Math.max(curr, max)
    }
    return max
}

console.log(maxSubArrayPrdkt(arr))