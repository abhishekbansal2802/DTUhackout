const express = require("express");
const { errorHandler } = require("../utils/feature");
const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()
const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, path.resolve("./public"))
        },
        filename: (req, file, cb) => {
            const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
            cb(null, `${file.filename}-${uniqueName}.jpg`)
        }
    }
)

const upload = multer(
    {
        storage: storage
    }
)

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return errorHandler(res, 404, "provide more details")
        let user = await User.findOne({
            email: email
        })
        if (user) return errorHandler(res, 401, "user already exists")
        const hashedPassword = await bcrypt.hash(password, 10)
        user = await User.create(
            {
                name: name,
                email: email,
                password: hashedPassword,
            })
        const token = jwt.sign({ id: user._id }, "something")
        return res.status(201).json({ success: true, message: "user created", user, token })
    } catch (err) {
        console.log(err)
        return errorHandler(res)
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return errorHandler(res, 404, "not enough details")
        let user = await User.findOne({ email: email }).select("+password")
        if (!user) return errorHandler(res, 401, "user not found")
        const compare = await bcrypt.compare(password, user.password)
        if (!compare) return errorHandler(res, 401, "not authorized")
        const token = jwt.sign({ id: user._id }, "something")
        return res.status(200).json({ success: true, message: 'user signed in', user, token })
    } catch (err) {
        return errorHandler(res)
    }
})

router.get("/me/:token", async (req, res) => {
    try {
        const { token } = req.params
        const { id } = jwt.decode(token, "something")
        if (!id) return errorHandler(res, 401, "something went wrong")
        const user = await User.findById(id)
        if (!user) return errorHandler(res, 401, "not authorized")
        return res.status(200).json({ success: true, message: "user found", user })
    } catch (err) {
        return errorHandler(res)
    }
})


router.post("/image/add", upload.single("image"), async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        return errorHandler(res)
    }
})

module.exports = router