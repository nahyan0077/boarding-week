function selection(arr) {
    for(let i = 0; i < arr.length; i++){
        min = i
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}


let arr = [23, 45, 17, 89, 6, 32, 71, 54, 9, 38]
console.log(selection(arr));
