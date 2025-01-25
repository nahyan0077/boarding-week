class MyClass {
    constructor(name) {
        this.name = name
        // this.data = this.getName()
    }
    getName(){
        return this.name
    }
}

const testClass = new MyClass("nahyan")

console.log(testClass);

class TestClass extends MyClass {
    constructor(name, age) {
        super(this.getName)
        this.age = age
    }
    getName(){
        return this.name
    }
}

const test1 = new TestClass("arjun",24)

console.log(test1);
