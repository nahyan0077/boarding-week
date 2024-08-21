function* fibo() {
    let a =-1
    let b = 1
    while(true){
        let c = a + b
        yield c
        a = b
        b = c
    }
}

const gen = fibo(5)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())




function* fibonacci() {
    let [a, b] = [0, 1];
    
    while (true) { 
        yield a; 
        [a, b] = [b, a + b];  
    }
}


const fibGenerator = fibonacci();

