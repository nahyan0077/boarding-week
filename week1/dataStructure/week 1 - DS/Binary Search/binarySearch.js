// function binarySearch(arr, target) {

//     let left = 0
//     let right = arr.length - 1
//     while (left <= right) {
//         let mid = Math.floor((right + left) / 2)
//         if (arr[mid] == target) {
//             return mid
//         } else if (target < arr[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// }

// let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)

// console.log(binarySearch(arr, 54))


function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return mid
        }else if (target < arr[mid]){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return -1
}


let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)
console.log(arr);



function bs(array, target) {
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left)/ 2)
        if (array[mid] == target) {
            return mid
        }
        if (target < array[mid] ) {
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return -1
}

console.log(binarySearch(arr, 71))