let today = new Date()
let today1 = Date.now()

console.log(today.getDate());
console.log(today.getFullYear());

console.log(today);

console.log(today1);

setTimeout(() => {
    console.log(today1 - Date.now());
    console.log(new Date - today);
}, 5000);


//days to christmax

let todayDate = new Date()
let christmax = new Date('2024-12-25')

let diff = Math.ceil((christmax - todayDate)/(60 * 60 * 24 * 1000))

console.log(diff);

//set a new date

const futureDate = new Date()

futureDate.setDate(new Date().getDate() + 10)

console.log(futureDate);
