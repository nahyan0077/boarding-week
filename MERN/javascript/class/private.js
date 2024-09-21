class MyClass {
    #myName
    constructor(name) {
        this.#myName = name
        this.name = name
    }
    getName(){
        console.log(this.name);
    }
    getPrivateName(){
        console.log(this.#myName);
    }
}

const result = new MyClass("Nahyan")

result.getName()
result.getPrivateName()

//this can be accessed
console.log(result.name)

//cant access private property name
console.log(result.myName)
