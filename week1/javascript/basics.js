//data types

// =====================================
//primitive  ------> immutable
let a = 10
let b = a
b = 50

console.log(a);
console.log(b);

console.log("=====-----========");

//non-primitive ----> mutable

let ob1 = {a: "a", b: "b"}
let ob2 = ob1

ob2.a = "new a"

console.log(ob1);
console.log(ob2);

console.log("=====-----========");
// ======================================
//let var const

// console.log(c);  //undefined (hoisted)

var c = 10
c = 20
// console.log(c);

//-------------------->
// console.log(d); //referace error (not hoisted)

let d = 23
d = 34

// console.log(d);

//------------------->
const e = 20
// e = 40  //error (can't redeclare)

// console.log(e);


//hoisting in let------------------>

// console.log(hoist);  //---------> cannot access hoist befor initialization
// 
// 
// 
// Temporal dead zone
// 
// 
// 
let hoist = 55
// console.log(hoist);


//loops----------------->
let x = -1
while(x<6){
    // console.log(x,"  while working");
    x++
}

console.log("---------------->");
//do while loops

let xx = -1
do {
    // console.log(xx, "  xx while loop");
    xx++
} while (xx <= 6);

//====================================
//increments

let incr = 3
// console.log(incr++);
// console.log(incr++);
// console.log("------");
let incr1 = 3
// console.log(++incr1);
// console.log(++incr1);

let cc = 10

if (true) {
    cc++
    // console.log(cc);
}


//=============================  Proxy , reflect 



const handler = {
    get(target, property) {
        console.log(`property--->${property}`);
        return Reflect.get(target,property)
    },
    set(target,property, value) {
        console.log(`change in property of ${property} to ${value}`);
        return Reflect.set(target,property)
    },
    deleteProperty(target,property) {
        console.log(`delete in property of ${property} `);
        return Reflect.deleteProperty(target,property)
    }
}

let obj = {name: "nahyan",age: 24}

const proxy = new Proxy(obj, handler)
// delete proxy.name
// proxy.name;
// proxy.name = "new name";

//=========================================

let ogg = {
    naem: 23,
    age: 34
}

delete ogg.age

// console.log(ogg);

//===================================
console.log(new Number(0)) //it gives an object
console.log(0); //it gives a number


//=================================== finding max in a number without changing to string

let  n = 4529345654
let max = 0
let x1;
while (n > 0) {
    x1 = Math.trunc(n % 10)
    if (x1 > max) {
        max = x1
    }
    n = Math.trunc(n / 10)
}
console.log(max)

//=====================================

