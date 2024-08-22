const bcrypt = require('bcrypt');

function hast(pass) {
    return bcrypt.hash(pass,10)
}




async function input(name="nahyan") {
    const res = await hast(name)
    console.log(res);
}

input()
