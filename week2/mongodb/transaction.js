const {mongoose} = require('mongoose');

async function runTransaction() {
    const session = await mongoose.startSession()
    session.startTransaction()
}