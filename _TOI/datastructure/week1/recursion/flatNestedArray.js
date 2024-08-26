function flatNestedArr(arr) {

    return arr.flat(Infinity)
}

let arr = [1,[3,[5,67]], [2, [3, 4]], 5]

console.log(flatNestedArr(arr));


//in recursion

function flatArrRecursion(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            res = res.concat(flatArrRecursion(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatArrRecursion(arr));


function flatArray1(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            res = res.concat(flatArray1(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatArray1(arr));


function flatNest1(arr, res = []) {
    if (arr.length == 0) {
        return res
    }
    let [first, ...rest] = arr
    if (Array.isArray(first)) {
        return flatNest1([...first,...rest], res)
    }else{
        res.push(first)
    }

    return flatNest1(rest, res)
}

console.log("new method  ",flatNest1(arr));
