

function maxSubArray(arr) {
    let max_so_far = arr[0]
    let max_end_here = arr[0]

    let tempStart = 0
    let start = 0
    let end = 0

    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max_end_here + arr[i]) {
            max_end_here = arr[i]
            tempStart = i
        }else{
            max_end_here += arr[i]
        }

        if(max_end_here > max_so_far){
            max_so_far = max_end_here
            start = tempStart
            end = i
        }
    }
    return {max_so_far, arr: arr.slice(start,end + 1)}
}

let arr = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(arr));
