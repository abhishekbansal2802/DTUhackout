const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: true,
    },
    userType: {
        type: String,
        default: "user"
    }
})

module.exports = mongoose.model("User", schema)