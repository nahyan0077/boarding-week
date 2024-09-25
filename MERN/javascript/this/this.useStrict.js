"use strict"

function one() {
    console.log(this); 
}

//while in normal case its global 
//in strict mode its undefined

one() //undefined

