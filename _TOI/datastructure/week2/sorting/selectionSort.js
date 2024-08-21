//time complexity ==>> O(n)
//space complexity ==>> O(1)


function selectionSort(arr) {
    let n = arr.length
    let minIndex
    for(let i = 0; i < n - 1; i++){
        minIndex = i
        for(let j = i + 1; j < n; j++){
            if (arr[j] > arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

let arr = [32,54,65,7,4,2,6,57,35,23]

console.log(selectionSort(arr));
