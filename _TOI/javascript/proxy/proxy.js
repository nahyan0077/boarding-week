const handler = {
    get(target, property){
        console.log("property get --->  ",property);
        return Reflect.get(target, property)
    },
    set(target, property, value){
        if (typeof value === "number") {
            console.log("property set --> ", property, " to ", value);
            return Reflect.set(target, property, value)
        }else{
            throw new Error("value is not a number");
        }
    },
    deleteProperty(target, property){
        console.log("property deleted  ", property);
        return Reflect.deleteProperty(obj, property)
    }
}

const obj = {
    name: "nahyan",
    age: 24
}

const proxy = new Proxy(obj, handler)

proxy.name

proxy.job = 33

delete proxy.job

console.log(proxy);
