let arr = [1,2,4,5,6,7,88]

let arr1 = arr
arr.length = 0

console.log(arr);
console.log(arr1);


//flatten nestted array

const arr2 = [1, [2, 3, [4, 5]], 6, [[7, 8], 9]];

function flatten(arr) {
    let res = []
    for(let ele of arr){
        if (Array.isArray(ele)) {
            res = res.concat(flatten(ele))
        }else{
            res.push(ele)
        }
    }
    return res
}

console.log(flatten(arr2));


//freq of an array

let arr3 = [1, 2, 3, 5, 6, 3, 2, 3, 3, 3, 4, 56, 2, 1, 3, 11,]

function freq(arr) {
    let obj = {}
    for(let ele of arr){
        if (obj[ele]) {
            obj[ele] = obj[ele] + 1
        }else{
            obj[ele] = 1
        }
    }
    console.log(obj);
    let res = Object.entries(obj).sort((a,b)=>b[1] - a[1])
    return {first:res[0][0],second:res[1][0]}
}

console.log(freq(arr3));
