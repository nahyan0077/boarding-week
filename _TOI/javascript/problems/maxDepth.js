function maxDepth(arr) {
    let depth = 1
    for(let ele of arr){
        if (Array.isArray(ele)) {
            depth = Math.max(depth, maxDepth(ele) + 1)
        }
    }
    return depth
}

console.log(maxDepth([1, [2, [3, [4]], 5]]));
