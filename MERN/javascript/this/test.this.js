
// ===> IN noramle func

function one() {
    console.log(this); 
}

one() //global



// ===>> In an object

let obj = {
    name: "nahyan",
    age: 234,
    print: function() {
        console.log(`printed data ==>>  ${this.name}  ==>  ${this.age}`); // `this` refers to the obj object
        
    }
}

obj.print()


// ===>> In constructor function

function funConstructor(name, age) {
    this.name = name
    this.age = age
    console.log(`${this.name}  ===   ${this.age}`);
    
}

const res = new funConstructor("nahya", 454)  // this refers to the newly created object.

console.log(res);


// === >> Event handlers

const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this);  // `this` refers to the button element
});


// Summary of this Behavior:

// Global Scope: this refers to the global object (Window or Global).
// Regular Function: this refers to the global object (in non-strict mode) or undefined (in strict mode).
// Method of an Object: this refers to the object calling the method.
// Constructor or Class: this refers to the new instance being created.
// Arrow Function: this is lexically bound (inherits this from the surrounding scope).
// Event Handlers: this refers to the DOM element the event is attached to (unless using an arrow function).
// Explicit Binding: call(), apply(), and bind() can explicitly set this.
// new Keyword: this refers to the newly created object.