function insertion(arr) {
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > curr) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr
    }
    return arr   
}

let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38]

console.log(insertion(arr));