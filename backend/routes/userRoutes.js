const express = require("express");
const { errorHandler } = require("../utils/feature");
const User = require("../models/User");
const bcrypt = require("bcryptjs")

const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return errorHandler(res, 404, "provide more details")
        let user = await User.findOne({
            email: email
        })
        if (!user) return errorHandler(res, 401, "user already exists")
        const hashedPassword = await bcrypt.hash(password, 10)
        user = await User.create(
            {
                name: name,
                email: email,
                password: hashedPassword,
            })
    } catch (err) {

    }
})

module.exports = router