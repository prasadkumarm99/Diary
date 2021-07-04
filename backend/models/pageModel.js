const mongoose = require("mongoose")

const pageSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true
  },
  date: {
    type: String,
    unique: true,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
})

const Page = mongoose.model("Page", pageSchema)

module.exports = Page