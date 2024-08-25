function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left)/2)
        if (target == arr[mid]) {
            return mid
        }
        if (target < arr[mid]) {
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return -1
}

let arr = [3, 7, 12, 15, 23, 29, 36, 42, 51, 58]

console.log(binarySearch(arr, 71))
console.log(binarySearch(arr, 36))