function *genrator () {
    yield 1
    yield 2
    yield 3
    return 5
}

const gen = genrator()

console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//passing values to generator function

function *genrator1 () {
    
    console.log(yield,"passed val in gen");
}

const gen1 = genrator1()

gen1.next();
gen1.next(6);

console.log("=================");
//create another genrator from the yields

function *generator2 () {
    yield* [2,4,7];
}

const gen2 = generator2()

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

console.log("==================");

//infinite sequence using generator

function* infinite () {
    let x = 1
    while (true) {
        yield x++
    }
}

const gen3 = infinite()

console.log(gen3.next())
console.log(gen3.next())
console.log(gen3.next())

console.log("=======--------========");

function* infinitGen () {
    let x = -1
    while (true) {
        x = x + 2
        yield x
    }
}

const infGen = infinitGen()

console.log(infGen.next());
console.log(infGen.next());
console.log(infGen.next());