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
