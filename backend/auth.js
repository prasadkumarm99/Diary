const User = require("./models/userModel")
const jwt = require("jsonwebtoken")

const auth = async (req, res, next) => {
  try{
    const token = req.header("Authorization").replace("Bearer ", "")
    const payload = jwt.verify(token, "Diary$Admin$852")
    const user = await User.findOne({ _id: payload._id, "tokens.token": token })
    if (!user) {
      throw new Error()
    }
    req.token = token
    req.user = user
    next()
  } catch(e) {
    res.status(401).send({ status: "Unauthorized"})
  }
}

module.exports = auth