let wkst = new WeakSet()

let obj1 = {name: "nahyan", age: 24}
let obj2 = {name: "ajmal", age: 29}

wkst.add(obj1)
wkst.add(obj2)


console.log(wkst.has(obj1));
