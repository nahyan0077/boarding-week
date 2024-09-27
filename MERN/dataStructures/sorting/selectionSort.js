let arr = [34,56,8,64,5,9,87,236,4]


function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort(arr));
