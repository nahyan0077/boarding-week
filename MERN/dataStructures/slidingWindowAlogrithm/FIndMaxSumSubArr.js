// ==>> (1) Find the maximum sum subarray with size = n
//Here we can use slding window technique to find this

function maxSumSubArr(arr, size) {
    let curr_sum = 0
    let max_sum = 0

    //getting the first subarray
    for(let i = 0; i < size; i++){
        curr_sum += arr[i]
    }

    max_sum = curr_sum

    //starting the sliding window and checking the rest of the subarrays
    for(let i = size; i < arr.length; i++){
        curr_sum += arr[i] - arr[i - size]
        max_sum = Math.max(curr_sum, max_sum) 
    }
    return max_sum
}

const arr = [2, 1, 5, 1, 3, 2];

console.log(maxSumSubArr(arr,3));


