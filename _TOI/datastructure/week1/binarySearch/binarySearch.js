function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] == target) {
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

let arr = [1,2,3,4,5,6,7,8,9]

console.log(binarySearch(arr, 134));
