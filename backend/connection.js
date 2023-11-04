const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({
    path: "./env/.env"
})

const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("connection done")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connect