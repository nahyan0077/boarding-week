//prototypes ===>>>> are a fundamental feature that enables inheritance and the creation of reusable code.

// ==>> Every JavaScript object has an internal property called [[Prototype]], which points to another object, called its prototype.
// ==>> This prototype object can contain methods and properties that the original object can access. This is what allows inheritance in JavaScript.

//function constructor

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(this.name, this.age);
}

const perons1 = new Person('nahyan',24)


