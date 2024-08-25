//time complexity ==>> O(n log n)
//space complexity ==>> O(log n)



function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr = [32,54,65,7,4,2,6,57,35,23]

console.log(quickSort(arr));


function quick1(arr) {
    if(arr.length <= 1) return arr
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick1(left),pivot, ...quick1(right)]
}

console.log(quick1(arr));


function quick2(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick2(left),pivot, ...quick2(right)]
}

console.log("last  ",quick2(arr));


function quick3(arr) {
    if(arr.length <= 1) return arr
    let left = []
    let right = []
    let pivot = arr[arr.length - 1]
    for(let i = 0;  i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick3(left), pivot, ...quick3(right)]
}


console.log("quick3  ", quick3(arr));
