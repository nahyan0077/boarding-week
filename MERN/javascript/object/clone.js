function isEqual(obj1, obj2) {
    if(obj1 === obj2) return true
    if (typeof obj1 !== 'object' || obj2 !== 'object' || obj1 == null || obj2 == null) {
        return false
    }

    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)

    if(key1.length !== key2.length) return false

    for(let ele of key1){
        if (!isEqual(obj1[ele], obj2[ele])) {
            return false
        }
    }
    return true
}



let objA = { name: 'Nahyan', address: { city: 'Calicut' }, skills: ['JavaScript', 'Node.js'] };
let objB = { name: 'Nahyan', address: { city: 'Calicut' }, skills: ['JavaScript', 'Node.js'] };

console.log(" check is equal ==>  ",isEqual(objA, objB));


let a = 10
let b = 10
b = 20

console.log(a == b); // false

console.log(objA === objB); //false


let deepClone = structuredClone(objB)

console.log("deepe clone of objB",deepClone);

