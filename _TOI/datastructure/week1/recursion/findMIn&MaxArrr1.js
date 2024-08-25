

function min(arr) {
    let min1 = Infinity
    let min2 = Infinity
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min1) {
            min2 = min1
            min1 = arr[i]
        }else if(min1 !== arr[i] && arr[i] < min2){
            min2 = arr[i]
        }
    }
    console.log(min1, min2);
    
}

let arr = [5, 13, 2, 8, 17, 3, 11, 6, 20, 9]

min(arr)


function max(arr) {
    let max1 = -Infinity
    let max2 = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max1){
            max2 = max1
            max1 = arr[i]
        }else if(max1 != arr[i] && arr[i] > max2){
            max2 = arr[i]
        }
    }
    console.log(max1, max2);
    
}

max(arr)


function minRecu(arr, min1 = Infinity, min2 = Infinity, index = 0) {
    if (index == arr.length) {
        return [min1, min2]
    }
    if (arr[index] < min1) {
        return minRecu(arr, arr[index], min1, index + 1)
    }else if(arr[index] < min2){
        return minRecu(arr, min1, arr[index], index + 1)
    }else{
        return minRecu(arr, min1, min2, index + 1)
    }
}

console.log(minRecu(arr));
