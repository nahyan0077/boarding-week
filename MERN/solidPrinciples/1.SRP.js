// ===== SOLID PRINCIPLES ======

// The SOLID principles are five key design principles for object-oriented programming (OOP) that make your code more flexible, understandable, and maintainable. 

// == 1 == SINGLE RESPONSIBLITY PRINCIPLE (SRP)

// A function should have only one responsibility. 
// It should perform a single task or operation.

function createUser(user) {
    console.log("user created", user);
}

function updateUser(user) {
    console.log("user updated ", user);
}

