const express = require("express")
const User = require("../models/userModel")

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, diary } = req.body
    const user = new User({
      name,
      email,
      password,
      diary
    })
    const newUser = await user.save()
    if (newUser) {
      res.send(newUser)
      console.log("User saved successfully.")
    } else {
      console.log("Failed to save user")
    }
  } catch (err) {
    console.log("Error:", err)
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(req.body)
    await User.findOne({ email, password }, (err, user) => {
      if (err) return console.log("Error:", err)
      res.send(user)
      console.log("User existed.")
    })
  } catch (err) {
    console.log("Error:", err)
  }
})

module.exports = router