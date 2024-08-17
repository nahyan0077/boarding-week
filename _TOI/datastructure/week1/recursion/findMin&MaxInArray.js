let arr = [5, 13, 2, 8, 17, 3, 11, 6, 20, 9]

//find min in an array
function findMin(arr) {
    let min1 = Infinity
    let min2 = Infinity
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min1) {
            min2 = min1
            min1 = arr[i]
        }else if(arr[i] < min2){
            min2 = arr[i]
        }
    }
    return [min1, min2]
}

console.log(findMin(arr));

//find max in an array
function findMax(arr){
    let max1 = -Infinity
    let max2 = -Infinity
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max1) {
            max2 = max1
            max1 = arr[i]
        }else if(arr[i] > max2){
            max2 = arr[i]
        }
    }
    return [max1, max2]
}

console.log(findMax(arr));


//USING RECURSION

function findMinRecr(arr, min1 = Infinity, min2 = Infinity, index = 0) {
    if (index == arr.length) {
        return [min1, min2]
    }
    if (arr[index] < min1) {
        return findMinRecr(arr, arr[index], min1, index + 1)
    }else if(arr[index] < min2){
        return findMinRecr(arr, min1, arr[index], index + 1)
    }else{
        return findMinRecr(arr, min1, min2, index + 1)
    }
}

console.log(findMinRecr(arr));


function findMaxRecur(arr, max1 = -Infinity, max2 = -Infinity, index = 0) {
    if (index == arr.length) {
        return [max1, max2]
    }
    if (arr[index] > max1) {
        return findMaxRecur(arr, arr[index], max1, index + 1)
    }else if(arr[index] > max2){
        return findMaxRecur(arr, max1, arr[index], index + 1)
    }else{
        return findMaxRecur(arr, max1, max2, index + 1)
    }
}

console.log(findMaxRecur(arr));
