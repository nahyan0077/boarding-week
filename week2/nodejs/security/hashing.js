const crypto = require('crypto');

const hash = crypto.createHash('sha256')

hash.update("newpassword")

console.log(hash.digest('hex'));
