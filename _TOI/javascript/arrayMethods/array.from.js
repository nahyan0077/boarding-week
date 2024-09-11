
function example() {
    console.log(arguments);
    const args = Array.from(arguments);
    console.log(args)
    
  }
  example(1, 2, 3);


//converting a set to array
let obj = new Set([1,2,3,4,4])
let res = Array.from(obj)
console.log(res);
  

let res1 = Array.from({length:10},(_,i) => i )
console.log(res1);
