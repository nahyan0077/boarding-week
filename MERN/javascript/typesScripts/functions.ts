interface User {
    name: string;
    age: number | string
}

let data: User = {
    name : "nahyan",
    age: "23"
}


function getUser(userData: User): User {
    return userData
}

//funcion overloading

function adder(num1:number | string, num2: number | string) : number | string {
    if (typeof num1 === 'string' || typeof num2  === 'string') {
        return num1 + " " + num2
    }
    return num1 + num2
}

adder(1,2)
adder("1","2")

// this multiple use of types can be avoided by using "any"

//this is fucntion overloading so we can use the same adder func for multiple type arguments types
//here type fucntion overrides the any
function adder1(num1: string, num2: string): string
function adder1(num1: number, num2: number): number
function adder1(num1:any, num2: any) : any {
    return num1 + num2
}

adder1(1,2)
adder1("1","2")
// adder1([],[])  //this type is not defined in func overloading


