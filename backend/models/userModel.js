const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate() {
      return validator.isEmail(this.email)
    }
  },
  password: {
    type: String,
    required: true,
    validate() {
      return validator.isStrongPassword(this.password)
    }
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User