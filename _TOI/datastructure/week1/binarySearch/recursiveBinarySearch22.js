function recrBinary(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target == arr[mid]) {
            return mid
        }
        if (target < arr[mid]) {
            return recrBinary(arr, left, mid - 1, target)
        } else {
            return recrBinary(arr, mid + 1, right, target)
        }
    }
    return -1
}


let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)

console.log(recrBinary(arr, 0, arr.length - 1, 71))


function binarySearch1(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return mid
        }
        if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(binarySearch1(arr, 45));

function recrBinary1(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return mid
        }
        if (target < arr[mid]) {
            return recrBinary1(arr, left, mid - 1, target)
        } else {
            return recrBinary1(arr, mid + 1, right, target)

        }
    }
    return -1
}

console.log(recrBinary1(arr, 0 , arr.length-1, 45));
