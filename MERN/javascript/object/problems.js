//convert array of object to single object

let arr = [
    { id: 1, name: 'Nahyan' },
    { id: 2, name: 'John' }
];


console.log({ ...arr });


//find common key between two objects

function commonKeys(obj1, obj2) {
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    let res = []
    for (let key of keys1) {
        if (keys2.includes(key)) res.push(key)
    }
    return res
}
let obj1 = { name: 'Nahyan', age: 25, role: 'developer' };
let obj2 = { name: 'John', age: 30, city: 'Calicut' };
console.log("common keys  ==>> ",commonKeys(obj1, obj2));
