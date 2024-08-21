let proObj = {
    name: "nahyan",
    age: 24
}

//prevention methods

const noPollution = Object.create(null)

noPollution.name = "nopollu"
noPollution.age = 999

Object.prototype.isPolluted = "you are polluted"

console.log(proObj.isPolluted)
console.log(proObj.hasOwnProperty("isPolluted"));


console.log(noPollution.isPolluted);
