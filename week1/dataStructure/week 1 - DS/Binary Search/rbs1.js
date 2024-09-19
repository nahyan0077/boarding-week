let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)

function recursiveBinarySearch(arr, left, right , target) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return mid
        }else if(target < arr[mid]){
            return recursiveBinarySearch(arr, left, mid - 1, target)
        }else{
            return recursiveBinarySearch(arr, mid + 1, right, target)
        }
    }
    return -1
}

console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 99));
