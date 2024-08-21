let wkMp = new WeakMap()

let obj1 = {name: "nahyan", age: 24}
let obj2 = {name: "ajmal", age: 29}



wkMp.set(obj1, 1)
wkMp.set(obj2, 2)

obj1 = null

console.log(wkMp.get(obj1));
console.log(wkMp.has(obj1));
