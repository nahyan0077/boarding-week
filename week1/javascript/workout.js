//find the days diffrence between two dats

let today = new Date()
let xmas = new Date(2024, 11,25)

console.log(xmas);

let diff = Math.abs(xmas - today)
console.log(diff);

console.log( Math.ceil(diff / (1000 * 60 * 60 * 24)) );

console.log("======================");

//find largest string

const stringArray = ["apple", "banana", "orange", "kiwi", "strawberry"];

let largest = stringArray.reduce((acc, curr) => {
    if (curr.length > acc.length ) {
        acc = curr
    }
    return acc
},'')

console.log(largest,"this is larges sting");
let smallest = stringArray.reduce((acc, curr) => {
    if (curr.length < acc.length ) {
        acc = curr
    }
    return acc
},stringArray[0])

console.log(smallest,"this is smalles sting");

console.log("================");


//======================================== flatten array

let nestedArray = [1, [2, [3, 4], 5], 6];

function flatten (nestedArray) {
    let arr = []
    nestedArray.forEach((ele) => {
        if (Array.isArray(ele)) {
            arr = arr.concat(flatten(ele))
        }else{
            arr.push(ele)
        }
    })
    return arr
}

console.log(flatten(nestedArray));

//flatten array using stack

function flattenStack (arr) {
    let stack = [...arr]
    let res = []
    while (stack.length) {
        let check = stack.pop()
        if (Array.isArray(check)) {
            stack.push(...check)
        }else{
            res.push(check)
        }
    }
    return res.reverse()
}

console.log(flattenStack(nestedArray));


console.log("====================");


const stringArr = ["apple", "banana", "orange", "kiwi", "strawberry"];

const lrg = stringArr.reduce((acc, curr) =>{
    if (curr.length > acc.length) {
        acc = curr
    }
    return acc
},'')

console.log(lrg);

const sml = stringArr.reduce((acc, curr) =>{
    if (curr.length < acc.length) {
        acc = curr
    }
    return acc
},stringArr[0])

console.log(sml);


console.log('=================');

let arr1 = [3,5,32,6,2,6,6,246,7,3]

console.log(arr1);

console.log(arr1);

let sp = arr1.splice(14)

console.log(sp);