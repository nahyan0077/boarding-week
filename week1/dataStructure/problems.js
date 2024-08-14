//remove duplicate elemenst in an array using hashtable

let array = [1, 2, 3, 4, 2, 3, 5, 1, 6];


// function dupHash(arr) {
//     let res = []
//     let hashtable = {}
//     for(let i = 0; i < arr.length; i++){
//         if (!hashtable[arr[i]]) {
//             hashtable[arr[i]] = true
//             res.push(arr[i])
//         }
//     }
//     return res
// }


//we can do it with map set object


// function dupHash(arr) {
//     let map = new Set()
//     let arr1 = []
//     for(let num of arr){
//         if(!map.has(num)){
//             map.add(num)
//             arr1.push(num)
//         }
//     }
//     console.log(map)
//     console.log(arr1)
// }

// dupHash(array)


function dupHash(arr) {
    let hash = {}
    for(let i = 0; i < arr.length; i++){
        if (!hash[arr[i]]) {
            hash[arr[i]] = true
        }
    }
    return Object.keys(hash)
}

console.log(dupHash(array))