//class declaration

class Hello {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    login() {
        console.log(`${this.name} login`);
    }
    logout() {
        console.log(`${this.name} logout`);
    }
}

class Parent extends Hello {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary
    }
    delete() {
        console.log(`deleted ${this.name} with ${this.age} and salary ${this.salary} `);
    }
}

const hello = new Hello("nahyan", 24)
const parent = new Parent("ajil", 25, 55000)

console.log(hello);

hello.login()
hello.logout()

console.log("=========");



console.log(parent);
parent.delete()


class MyClass {
    name;
    #salary;
    static age;
    constructor(name, salary, age) {
        this.name = name
        this.age = age
        this.#salary = salary
    }
    showAge() {
        console.log(this.age);
    }
    showName() {
        console.log(this.name);
    }
    showSalary() {
        console.log(this.#salary);
    }
}

class ParentClass extends MyClass {
    constructor(name, age, salary, type) {
        super(name, age, salary)
        this.type = type
    }
    result() {
        console.log(`${this.name, this.age, this.salary, this.type}`);
    }
    static check() {
        console.log("static printed");
    }
}

const myClass = new MyClass("nahyan", 65000, 25)
const parentClass = new ParentClass("nahyan", 65000, 25, "home")

console.log(myClass);
console.log(parentClass);

ParentClass.check()

console.log(myClass instanceof MyClass);
console.log(myClass instanceof ParentClass);

console.log("==========----------=============");

class NewClass {
    #gender;
    static car;
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    print() {
        console.log(this.age + " " + this.name + " " + this.#gender);
    }
    setGender(gender) {
        this.#gender = gender
    }
    static print1() {
        console.log(" staitc "+ this.car);
    }

}

NewClass.print1()

const nwCls = new NewClass("nahyan", 24)

nwCls.setGender("male")

nwCls.print()