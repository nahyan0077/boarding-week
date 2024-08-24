//time complexity ==>> O(n)
//space complexity ==>> O(1)


function insertionSort(arr) {
    let n = arr.length
    for (let i = 1; i < arr.length; i++) {
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

let arr = [32,54,65,7,4,2,6,57,35,23]

console.log(insertionSort(arr));



function insertion1(arr) {
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

console.log(insertion1(arr));
