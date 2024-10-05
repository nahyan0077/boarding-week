// === Enums ===

type Status1 = 'pending' | 'complete' | 'reject'

//instead of this we can use Enums

// enum Status2 {
//     PENDING = 'pending',
//     COMPLETE = 'complete',
//     REJECT = 'reject'
// }

//if we are using normal enum it will run in runtime as IIFE so we can use  ==>> "const enum"

// === const enum ====
// TypeScript provides const enums to optimize performance by eliminating the enum at 
// runtime and inlining the values where the enum is used. Const enums are useful when 
// you want to avoid the overhead of additional JavaScript code for enum objects.

const enum Status3 {
    PENDING = 'pending',
    COMPLETE = 'complete',
    REJECT = 'reject'
}

function getStatus1(message:string, status: Status3) {
    console.log(message + " ==>> ", status);
    
}

getStatus1("order123",Status3.COMPLETE)