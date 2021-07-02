const express = require("express")
const User = require("../models/userModel")

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({
      name,
      email,
      password
    })
    const newUser = await user.save()
    if (newUser) {
      res.status(201).send(newUser)
    } else {
      res.status(400).send()
    }
  } catch (err) {
    res.status(400).send()
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    if (user) {
      res.status(302).send(user)
    } else {
      res.status(404).send()
    }
  } catch (err) {
    res.status(400).send()
  }
})

module.exports = router