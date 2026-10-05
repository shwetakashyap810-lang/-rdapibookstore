const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/reactcrud2026');
        console.log("Db Connected..")
    } catch (err) {
        console.log(err)
    }
}
module.exports = connect