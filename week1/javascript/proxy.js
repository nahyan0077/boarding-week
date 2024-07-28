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
proxy.name = "new name";