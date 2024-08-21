//function statement
//-->fucntion statments are hoisted
x()

function x() {
    console.log("statment");
    
}


//function expression

const y = function () {
    console.log("expressions");
}

y()
