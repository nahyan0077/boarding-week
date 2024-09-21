// === 3 === Liskov Substitution Principle

// Objects of a subclass should be able to replace objects of the parent class 
// without affecting the correctness of the program. In simpler terms, 
// derived classes must be substitutable for their base classes.

//doesnt follow

class Bird {
    fly(){
        console.log('I can fly');
    }
}
class Eagle extends Bird {
    fly(){
        console.log("I can fly");
    }
}
class Penguin extends Bird {
    fly(){
        throw new Error("I can't fly");
    }
}


// good way

class Bird {
    walk(){
        console.log("i can walk");
    }
}

class Eagle extends Bird {
    fly(){
        console.log("I can walk");
    }
}
class Penguin extends Bird {
    fly(){
        console.log("I can walk");
    }
}
