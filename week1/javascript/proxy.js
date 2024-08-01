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
delete proxy.name
proxy.name;
console.log(proxy.name = "new name");

const handler1 = {
    get(target, prop){
        console.log("get name");
        return Reflect.get(target,prop)
    },
    set(target, value){
        console.log("set "  + " to " + value);
        Reflect.set(target,value)
    }
}

const obj1 = {
    name: "ajmal",
    age: 34
}

const proxy1 = new Proxy(obj1, handler1)

console.log(proxy1.name);

console.log(proxy1.name = "nahyan")