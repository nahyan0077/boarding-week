let arr = [5, 13, 2, 8, 17, 3, 11, 6, 20, 9]

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    return arr
}

console.log(reverseArray(arr))

//using recursion

function reverseArrayRecrsion(arr, left = 0, right = arr.length - 1, i = 0) {
    if (i == arr.length / 2) {
        return arr
    }
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    return reverseArrayRecrsion(arr, left + 1, right - 1, i + 1)
}

console.log(reverseArrayRecrsion(arr));


function revArray1(arr, i = 0) {
    if (i <= arr.length / 2) {
        return arr
    }
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    return revArray1(arr, i + 1)
}

console.log(revArray1(arr));
