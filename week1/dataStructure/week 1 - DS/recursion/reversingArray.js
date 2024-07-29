function reveseArr(arr, start, end) {
    if (start == end) {
        return arr
    }
    [arr[start], arr[end]] = [arr[end], arr[start]]
    return reveseArr(arr, start + 1, end - 1)
}

console.log(reveseArr([1, 2, 3, 4, 5, 7, 7], 0, [1, 2, 3, 4, 5, 7, 7].length - 1));