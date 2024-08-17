let person = {
    name: "nahyan",
    greet: function (age) {
        console.log("hello  "+ this.name, "  --->  ",age);
    }
}

person.greet(34);


const employee = Object.create(person)

employee.job = "developer"
// employee.name = "daasan"

console.log(employee.job);
employee.greet(25);
console.log(employee.name)
console.log(employee)