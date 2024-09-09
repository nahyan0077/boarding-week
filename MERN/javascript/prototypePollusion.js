let obj = {
    name: "nahyan",
    age: 24
}

Object.prototype.pollute = "you object is polluted"

console.log(obj.hasOwnProperty("pollute"));


console.log(obj.pollute);

