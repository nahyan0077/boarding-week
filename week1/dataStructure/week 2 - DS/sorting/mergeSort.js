// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//     let sortedArray = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sortedArray.push(left.shift())
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray, ...left, ...right]
// }

// let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38]

// console.log(mergeSort(arr));



function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38]

console.log(mergeSort(arr));