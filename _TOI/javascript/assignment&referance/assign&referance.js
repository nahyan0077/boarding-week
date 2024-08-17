
//premitive data types, static memory allocation, stack

let a = 10
let b = a

a = 20

console.log(a)
console.log(b)


//non-primtive data types, dynamic memory allocation, heap.

let a1 = [1,2,3,4,5]
let b1 = a1

a1.push(6)

console.log(a1)
console.log(b1)


let a2 = [1,2,3,4,5]
let b2 = [...a2]

b2.push(56)

console.log(a2);
console.log(b2);
