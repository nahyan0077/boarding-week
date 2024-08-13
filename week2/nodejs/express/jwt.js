const jwt = require('jsonwebtoken');

const secret = "MYJWTSECRETISTHIS"


function generteToken(data) {
    const token = jwt.sign(data, secret, {expiresIn: '1h'})
    return token
}

function verify(token) {
    return jwt.verify(token, secret)
}

let data = {
    name: "nahyan",
    age: 29,
    work: "Developer"
}

console.log(generteToken(data))

console.log(verify(generteToken(data)));
