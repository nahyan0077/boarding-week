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
            arr[j + 1] = arr[i]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insertion1(arr));

function insertion2(arr) {
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while (j >=0 && key > arr[j]) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}


console.log(insertion2(arr))


function insertionSort2(arr) {
    for(let i = 1; i < arr.length ;  i++){
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && key < arr[i]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

console.log("last  ",insertionSort2(arr));


function insertion3(arr) {
    for(let i = 1; i < arr.length; i++){
        let key = i
        let j = i - 1
        while (j >= 0 && key > arr[j]) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

console.log("last 2 ",insertion3(arr));



function insertion33(arr) {
    for(let i = 1; i < arr.length; i++){
        let min = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] < min) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = min
    }
    return arr
}

console.log("33 -->  ",insertion33(arr));
