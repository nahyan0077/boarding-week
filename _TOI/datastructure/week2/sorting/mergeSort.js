//time complexity ==>> O(n logn)
//space complexity ==>> O(n)


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left =mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]
}

let arr = [32,54,65,7,4,2,6,57,35,23]

console.log(mergeSort(arr));


function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = ~~arr.length/2
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

function merge(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

console.log(mergeSort(arr))

function mergeSort1(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor((arr.length)/2 )
    let left = mergeSort1(arr.slice(0,mid))
    let right = mergeSort1(arr.slice(mid))
    return merge1(left, right)
}

function merge1(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left, ...right]
}

console.log("last  ",mergeSort1(arr));


function mergeSort2(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort2(arr.slice(0, mid))
    let right = mergeSort2(arr.slice(mid))
    return merge2(left, right)
}

function merge2(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray, ...left, ...right]
}

console.log(mergeSort2(arr));




function mergeSort3(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor((arr.length)/2)
    let left = mergeSort3(arr.slice(0,mid))
    let right = mergeSort3(arr.slice(mid))
    return merge3(left, right)
}

function merge3(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

console.log("last  ",mergeSort3(arr));
