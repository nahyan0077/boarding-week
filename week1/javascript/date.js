const today = new Date()
const today1 = new Date(2024,11,25)

let diff = Math.ceil(Math.abs((today - today1)/(1000 * 60 * 60 * 24)))

console.log(diff);
