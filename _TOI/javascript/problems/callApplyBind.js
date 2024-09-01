const person = {
    name: "nahyan",
    age: 24,
    fullName: function () {
        console.log(this.name, " ", this.age);
    }
}

person.fullName()

const obj = new Object()

obj.name = "Thakku"
obj.age = 33

person.fullName.call(obj)


console.log(obj)
obj.fullName


const newObj = new Object()

person.fullName.call(newObj)