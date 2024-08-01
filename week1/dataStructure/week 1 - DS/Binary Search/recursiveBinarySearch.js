// function recursiveBinary(arr, left, right, target) {
//     if (left <= right) {
//         let mid = Math.floor((right + left) / 2)
//         if (arr[mid] == target) {
//             return mid
//         } else if (target < arr[mid]) {
//             return recursiveBinary(arr, left, mid - 1, target)
//         } else {
//             return recursiveBinary(arr, mid + 1, right, target)
//         }
//     }
//     return -1
// }



function recursiveBinary(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return mid
        } else if (target < arr[mid]) {
            return recursiveBinary(arr, left, mid - 1, target)
        } else {
            return recursiveBinary(arr, mid + 1, right, target)
        }
    }
}



let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)
console.log(arr);

console.log(recursiveBinary(arr, 0, arr.length - 1, 45))