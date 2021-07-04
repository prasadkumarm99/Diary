const express = require("express")
const User = require("../models/userModel")
const auth = require("../auth")

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({
      name,
      email,
      password
    })
    const token = await user.newAuthToken()
    const newUser = await user.save()
    if (newUser) {
      res.status(201).send({ user: newUser, token })
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
    const user = await User.findByCredentials(email, password)
    const token = await user.newAuthToken()
    if (user) {
      res.status(302).send({ user, token })
    } else {
      res.status(404).send()
    }
  } catch (err) {
    res.status(400).send()
  }
})

router.delete("/logout", auth, async (req, res) => {
  try {
    const result = req.user.tokens.filter((obj) => obj.token !== req.token)
    if (result.length === req.user.tokens.length) {
      throw new Error()
    }
    req.user.tokens = result
    await req.user.save()
  } catch(e) {
    res.status(400).send()
  }
})

module.exports = router