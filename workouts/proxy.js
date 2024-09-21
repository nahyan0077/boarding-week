const obj = {
    name: 'nahyan',
    age: 24,
    gender: 'male'
}


const handler = {
    get(target, prperty){
        console.log(`${target}  ==>>  ${prperty}`);
        return Reflect.get(target, prperty)
    },
}


const proxy = new Proxy(obj, handler)

console.log(proxy.name)