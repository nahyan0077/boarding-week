let obj = {
    name: "nahyan",
    age: 24
}

//ways to iterate through object

//1. for in
for(let ele in obj){
    console.log(ele, " ==>> " ,obj[ele]);
}

//2. object.keys()

Object.keys(obj).forEach(ele => {
    console.log(ele, " ==>> " ,obj[ele]);
})

//3. Object.entries()
Object.entries(obj).forEach(ele=>{
    console.log(ele[0], " ==>> " ,ele[1]);
})


///problems

let obj1 = {}
let a = {a: 100}
let b = {b: 100}

obj1[a] = 10
obj1[b] = 20

console.log(obj1);

/////The push() method in JavaScript is used to add one or more elements to the end of an array. Internally, the push() method modifies the original array and returns the new length of the array after the elements have been added.

let x = [2,3].push(20)

console.log(x); // 3 ==> its the length of the array



