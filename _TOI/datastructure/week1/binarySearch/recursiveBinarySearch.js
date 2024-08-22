function recBinarySearch(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] == target) {
            return mid
        }else if ( target < arr[mid] ) {
            return recBinarySearch(arr, left, mid - 1, target)
        }else{
            return recBinarySearch(arr, mid + 1, right, target)
        }
    }
    return -1
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log(recBinarySearch(arr, 0, arr.length - 1, 912));
