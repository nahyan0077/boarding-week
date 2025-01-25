function memoize(fn) {
    let cache = {}
    return function (...arg) {
        let key = JSON.stringify(arg) // convert this to a unique key string
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
console.log(first(1, 2, 3));
console.log(first(1, 2, 3));
console.log(first(1, 2, 3));
console.log(first(1, 2, 3));
console.log(first(1, 2, 3));


function memoizationFunction(expFunc) {
    let catchMap = new Map()
    return {
        getter: (...arg) => {
            const key = JSON.stringify(arg)
            if (catchMap.has(key)) {
                return catchMap.get(key)
            }
            return expFunc(...arg)
        }
    }
}
