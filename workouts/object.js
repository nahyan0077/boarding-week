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