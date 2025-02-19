function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (target < arr[mid]) {
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return arr
}

let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)

console.log(binarySearch(arr, 71))

