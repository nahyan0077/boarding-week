"use strict"

let obj = {
    name: "nahyan",
    age: 24,
    clone: this.name
}

console.log(obj);


class MyClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}

const data = new MyClass("nahyan", 24)

class ChildClass extends MyClass {
    constructor(name, age) {
        super(name,age)
    }
}

const data1 = new ChildClass("ajmal",35)

console.log(data);

console.log(data1)


//constructor function

function MyFunc(name, age) {
    this.name = name
    this.age = age
}

const funcData = new MyFunc("saniay",23)

console.log(funcData);
