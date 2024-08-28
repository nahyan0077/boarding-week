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

let arr = [32,54,65,7,4,2,6,57,35,23,1]

console.log(selectionSort(arr));


function selection1(arr) {
    let n = arr.length
    let minIndex
    for(let i = 0; i < n - 1; i++){
        minIndex = i
        for(let j = i + 1; j < n; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selection1(arr));



function selection2(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < minIndex) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log("selec  ",selection2(arr));



function selection3(arr) {
    let min
    for(let i = 0; i < arr.length - 1; i++){
        min = i
        for(let j = i; j < arr.length; j++){
            if (arr[j]< arr[min]) {
                min = j
            }
        }
        if (min != i) {
            [arr[min], arr[j]] = [arr[j], arr[min]]
        }
    }
    return arr
}

console.log("last  ",selection3(arr));


function selection4(arr) {
    let minIndex
    for(let i = 0; i < arr.length - 1; i++){
        minIndex = i
        for(let j = i; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                minIndex = j
            }
        }
        [arr[i] , arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log("selection   ",selection4(arr));
