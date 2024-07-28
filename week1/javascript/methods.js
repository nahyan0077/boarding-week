let x = undefined

console.log(x ?? "its undefined");


function withLogging(fn) {
    return function (...args) {
        console.log(`Calling function with arguments: ${args}`);
        const result = fn(...args);
        console.log(`Function returned: ${result}`);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);

console.log(loggedAdd(2, 3)); // Outputs: "Calling function with arguments: 2,3", "Function returned: 5", "5"
