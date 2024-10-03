// ==== Typescript ===
//Its a superset of javascript

//infer types
let a = 10; //here ts implicitly give type to a
// a = "10"  //so assigning number to string through an error

interface MyObj {
  name: string;
  age: number | string; //union type
}

let obj1 = {
  name: "nahyan",
  age: 24,
};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 5));


//union operator :- we can declare that a type could be one of many types.
let arr: (string | number)[] = ["a", "b", "c", 20, 45];

// optional operator
type car = {
    model: number;
    price?:  number // ? is optional operator
}


//named types

type Status = "pending" | "paid" | "failed"

let payment : Status = "pending"