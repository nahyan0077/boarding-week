//Sum of Maximum subarray

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


//Altrenative method

//in this method we will get the max_sum only

function maxSubArray1(arr) {
    let curr_sum = arr[0]
    let max_sum = arr[0]
    for(let i = 1; i < arr.length; i++){
        curr_sum = Math.max(curr_sum + arr[i], arr[i])
        max_sum = Math.max(max_sum, curr_sum)
    }
    return max_sum
}

console.log(maxSubArray1(arr));



function maxSubArraySum1(arr) {
    let curr = arr[0]
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        curr = Math.max(curr + arr[i], arr[i])
        max = Math.max(curr, max)
    }
    return max
}

console.log(maxSubArraySum1(arr))