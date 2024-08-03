const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/boarding')

        console.log("mongdb server connected");

    } catch (error) {
        console.log("mongo connection error:  ", error);

    }
}

module.exports = { connect }