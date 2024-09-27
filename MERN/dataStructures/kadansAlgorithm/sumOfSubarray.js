// === Kadanes Algorithm  ====

// Kadane's Algorithm is a dynamic programming technique used to solve the Maximum Subarray Problem. 
// The problem asks to find the contiguous subarray within a one-dimensional array of numbers 
// (which can be both positive and negative) that has the largest sum.

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function subarrySum(arr) {

    //This will check the sum of subarray upto this index
    let max_ends_here = arr[0]
    //max subarray sum got sofar
    let max_so_far = arr[0]


    let temp_start_index = 0 //temp start index to get in track
    let startIndex = 0 //real start index
    let endIndex = 0 //real end index

    for(let i = 0; i < arr.length; i++){
        //checking if the max subarray sum upto this index is > this element
        if( arr[i] > max_ends_here + arr[i]){
            max_ends_here = arr[i]
            temp_start_index = i
        }else{
            max_ends_here += arr[i] // adding elements to the subarray 
        }

        //finding the max subarray sum
        if (max_ends_here > max_so_far) {
            max_so_far = max_ends_here
            startIndex = temp_start_index
            endIndex = i
        }
    }

    return {max_so_far, startIndex,endIndex}
}

console.log(subarrySum(arr))

