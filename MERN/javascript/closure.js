//example 1

function counter() {
    let count = 0
    return function abc() {
        count++
        return count
    }
}

//first instance of function
const counter1 = counter()
//second instance of function
const counter2 = counter()



console.log(counter1());
console.log(counter1());
console.log(counter2());


//closure for data privacy and encapsulation

//--->> Closures allow you to create private variables that cannot be accessed from outside the function. This is useful for data hiding and encapsulation, ensuring that only specific functions can modify the variables.

function private() {
    let count = 0
    return () =>{
        count++
        return count
    }
}


let res = private()
console.log("privet res  : ",res());
console.log("privet res  : ",res());
console.log("privet res  : ",res());


//---->> 