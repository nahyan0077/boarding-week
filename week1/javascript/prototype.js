//========= prototype object

const obj = {
    name: "nahyan"
}

const protoObj = Object.create(obj)
// console.log(protoObj);
// console.log(protoObj.name);

// console.log(Object.getPrototypeOf(protoObj));

//========================= object constructor

function Person (name){
    this.name = name
}

const obj1 = new Person('name')

console.log(obj1);

//


let proObj = {
    name: "nahyan",
    age: 24
}

//by restricting Object.create(null) we can restrict prototype pollution

// let proObj = Object.create(null)
// proObj.name = "nahyan",
// proObj.age = 24

Object.prototype.polluted = "you are polluted"

console.log(proObj.hasOwnProperty("name"));

console.log(proObj.polluted);

console.log(proObj.hasOwnProperty("polluted"));
