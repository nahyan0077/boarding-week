type User1 = {
    name: string,
    age: number
}
type Admin1 = {
    name: string,
    role: string,
    age: number
}

//without rewritting all this types again we can use it like

type Admin2 = User1 & {
    role: string
}


let userData: User1 = {
    name: "nahyan",
    age: 24
}

let adminData : Admin2= {
    name: "admin",
    role: "admin",
    age: 25
}

//we are using interface we can use extends instead of "&"

interface User2 {
    name: string,
    age: number
}
interface Admin3  extends User2 {
    role: string,
}


let userData1: User1 = {
    name: "nahyan",
    age: 24
}

let adminData1 : Admin3= {
    name: "admin",
    role: "admin",
    age: 25
}


//==== as const ===

let myName = "nahyan" as const
// myName = "helloo"  //this cant be changed makes it readonly

