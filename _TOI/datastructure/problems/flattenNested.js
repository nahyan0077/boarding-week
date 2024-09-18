const arr = [1, [2, 3, [4, 5]], 6, [[7, 8], 9]];

function flaten(arr) {
    let res = []
    for(let x of arr){
        if (Array.isArray(x)) {
            res = res.concat(flaten(x))
        }else{
            res.push(x)
        }
    }
    return res
}

console.log(flaten(arr));
