var arr = [7,9,1, 2, 33, 4, 5, 6]

let max1 = -Infinity
let max2 = -Infinity

for(let i = 0; i < arr.length; i++){
    if (arr[i] > max2) {
        max1 = max2
        max2 = arr[i]
    }else if(arr[i] < max2 && arr[i] > max1) {
        max1 = arr[i]
    }
}

console.log(max1);
console.log(max2);

let min1 = Infinity
let min2 = Infinity

for(let j = 0; j < arr.length; j++){
    if (arr[j] < min2) {
        min1 = min2
        min2 = arr[j]
    }else if(arr[j] > min2 && arr[j] < min1 ) {
        min1 = arr[j]
    }
}

console.log(min1);
console.log(min2);