function memoize(fn) {
    let cache = {}
    return function (...arg) {
        let key = JSON.stringify(arg)
        if (cache[key]) {
            return cache[key]
        }
        let res = fn(...arg)
        cache[key] = res
        return res
    }
}


function expFn(...arg) {
    return arg.reduce((acc, curr) => acc + curr, 0)
}

const first = memoize(expFn)

//this will return the memoized version only...
console.log(first(1,2,3));
console.log(first(1,2,3));
console.log(first(1,2,3));
console.log(first(1,2,3));
console.log(first(1,2,3));
