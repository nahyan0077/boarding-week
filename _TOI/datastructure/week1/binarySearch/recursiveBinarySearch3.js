function recursiveBinarySearch(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] == target) {
            return mid
        }
        if (target < arr[mid]) {
            return recursiveBinarySearch(arr, left, mid - 1, target)
        }else{
            return recursiveBinarySearch(arr, mid + 1, right, target)
        }
    }
    return -1
}

let arr = [3, 7, 12, 15, 23, 29, 36, 42, 51, 58]

console.log(recursiveBinarySearch(arr,0, arr.length - 1, 71))
console.log(recursiveBinarySearch(arr,0, arr.length - 1, 36))