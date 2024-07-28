const weekMap = new WeakMap()

let obj = {name: "nahyan", age: 24}

weekMap.set(obj,"nahyan")
console.log(weekMap.get(obj))

// obj = null
weekMap.delete(obj)
console.log(weekMap.has(obj))

console.log("=========================");

const weekSet = new WeakSet()

let obj1 = {name: "ajmal"}

weekSet.add(obj1,"serttt")

weekSet.delete(obj1)
console.log(weekSet.has(obj1));
