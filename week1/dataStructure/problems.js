//remove duplicate elemenst in an array using hashtable

let array = [1, 2, 3, 4, 2, 3, 5, 1, 6];


function dupHash(arr) {
    let res = []
    let hashtable = {}
    for(let i = 0; i < arr.length; i++){
        if (!hashtable[arr[i]]) {
            hashtable[arr[i]] = true
            res.push(arr[i])
        }
    }
    return res
}

console.log(dupHash(array))