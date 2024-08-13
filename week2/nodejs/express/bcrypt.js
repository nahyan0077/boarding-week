// const bcrypt = require('bcrypt');


// async function hash(password) {
//     return await bcrypt.hash(password,10)
// }

// async function compare(password, hashPass) {
//     return await bcrypt.compare(password,hashPass)
// }


// async function input(password) {
    
//     console.log(await hash(password))
// }
// async function login(password, hash) {
//     console.log(await compare(password,hash))
    
// }

// input("nahyan")
// login("nahyan1","$2b$10$QhJS2vmnzkjLLs2Uze8keuvjGQ8TnmVTffwu3/2a5E4tCAf4a5wgq")


const bcrypt = require('bcrypt');

function hash(password) {
    return bcrypt.hash(password,10)
}

function compar(hash, input) {
    return bcrypt.compare(input, hash)
}


async function input(input) {
    console.log(await hash(input))
    
}
async function compare(input) {
    console.log(await compar( "$2b$10$XGCyMrgKjuDzBbO1su2qtOgS5.Uchto.N7nxxjPbQGXcI75LRCPMu" ,input))
    
}

input("nahyan")
compare("nahyan")


