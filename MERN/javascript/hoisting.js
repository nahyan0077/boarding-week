let x = 10

console.log(y);


var y = 20

abc()

//function declaration
function abc() {
    console.log("hoisted abc");
}
abc()

//function expression  --->> if we assign a function to a veriable is fuciton expressions (ite can be either anonymous or named function)


let abc1 = () => {
    console.log("hoisted abc1");
};
abc1();


(function () {
    console.log("hellow IIFE");

})()