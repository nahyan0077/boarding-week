function quick(arr) {
    if (arr.length < 2) {
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot, ...quick(right)]
}

let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38]

console.log(quick(arr));