const mongoose = require("mongoose")

function Connection() {

    const mongoURI = "mongodb+srv://admin:carmenlopryy445566@cluster0.mkhqpr3.mongodb.net/chatdb?retryWrites=true&w=majority"

    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("🔥 MongoDB Connected"))
    .catch(err => console.log(err))

}

module.exports = Connection
