const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    password: {
        type: string,
        required: true,
        select: true,
    },
    userType: {
        type: string,
        default: "user"
    }
})

module.exports = mongoose.model("User", schema)