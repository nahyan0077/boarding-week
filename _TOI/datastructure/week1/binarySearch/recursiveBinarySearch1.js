function recusiveBinary(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target == arr[mid]) {
            return mid
        }else if(target < arr[mid]){
            return recusiveBinary(arr, left, mid + 1, target)
        }else{
            return recusiveBinary(arr, mid + 1, right, target)
        }
    }
    return -1
}

let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38].sort((a, b) => a - b)

console.log(recusiveBinary(arr, 0, arr.length - 1, 71));
