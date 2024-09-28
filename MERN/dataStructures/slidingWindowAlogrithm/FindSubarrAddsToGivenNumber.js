//Find Subarrys that adds upto a given number ??

function subArrAddToSum(arr, sum) {
    let curr_sum = 0

    for(let i = 0; i < arr.length; i++){
        if(curr_sum < sum){
            curr_sum += arr[i]
        }
    }
}


const arr = [8, 3, 12, 5, 17, 9, 1, 6, 14, 2, 11, 7, 4, 10, 15, 13, 16, 3, 9, 5]
