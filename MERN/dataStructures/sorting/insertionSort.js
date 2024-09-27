
let arr4 = [2, 1, 4, 4, 3, 1, 2, 2, 4, 1]

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insertionSort(arr4));
