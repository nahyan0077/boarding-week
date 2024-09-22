function double(func,num) {
    return func(func(num,num),func(num,num))
}

function add(a , b) {
    return a + b
}


const result = double(add,10)

console.log(result);
