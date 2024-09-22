let arr = [1, 2, 3, 5, 6, 3, 2, 3, 3, 3, 4, 56, 2, 1, 3, 11,]

let map = new Map()
for (let x of arr) {
    if (map.has(x)) {
        map.set(x, map.get(x) + 1)
    } else {
        map.set(x, 1)
    }
}
console.log(map);

let res = [...map.entries()].sort((a, b) => b[1] - a[1])

console.log(res[0][0], res[1][0]);


let obj = {}

for (let x of arr) {
    if (obj[x]) {
        obj[x] = obj[x] + 1
    } else {
        obj[x] = 1
    }
}

console.log(obj);

let max = -Infinity
for (let x in obj) {
    if (obj[x] > max) {
        max = x
    }
}
console.log(max);
