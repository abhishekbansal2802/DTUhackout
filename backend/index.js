const express = require("express")
const bodyParser = require("body-parser")
const conection = require("./connection")
const cors = require("cors")

const userRouter = require("./routes/userRoutes")

const app = express()

conection()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/user", userRouter)

app.listen("8080", async () => {
    console.log(`server running on port 8080`)
})
