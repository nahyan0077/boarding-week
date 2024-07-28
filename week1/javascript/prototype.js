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

