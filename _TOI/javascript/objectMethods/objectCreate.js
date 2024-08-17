const person = {
    name: 'John',
    greet() {
        console.log('Hello, ' + this.name);
    }
};

const employee = Object.create(person);
employee.job = 'Developer';

employee.greet(); 
console.log(employee.job); 
