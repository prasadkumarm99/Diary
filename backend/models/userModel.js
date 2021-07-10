const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
})

// Virtual relation to Diary collection
userSchema.virtual("pages", {
  ref: "Page",
  localField: "_id",
  foreignField: "author"
})

// Hiding sensitive data
userSchema.methods.toJSON = function() {
  const user = this
  const userProfile = user.toObject()
  delete userProfile.password
  delete userProfile.tokens
  return userProfile
}

// Instance method for generating webtoken
userSchema.methods.newAuthToken = async function() {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, "Diary$Admin$852", { expiresIn: "2h" })
  user.tokens = user.tokens.filter((token) => {
    try{
      jwt.verify(token, "Diary$Admin$852").exp
      return token
    } catch (e) {}
  })
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

// Static method for validating credentials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error("Invalid credentials")
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw new Error("Invalid credentials")
  }
  return user
}

// Middleware for password encryption
userSchema.pre("save", async function(next) {
  const user = this
  if (user.isModified("password")){
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

const User = mongoose.model("User", userSchema)

module.exports = User