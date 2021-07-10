const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const userRouter = require("./routes/userRouter")
const diaryRouter = require("./routes/diaryRouter")

const PORT = process.env.PORT || 5000
const MONGO_URL = "mongodb+srv://diary-admin:1111@diarydb.hrgxd.mongodb.net/diaryBase?retryWrites=true&w=majority"

//MongoDB connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(x => {
  console.log("Connected to MongoDB. Name:", x.connections[0].name)
}).catch(err => {
  console.log("Connection error, ", err)
})

// Express server
const app = express()
app.use(express.json())

// User router
app.use("/user", userRouter)

// Diary router
app.use("/diary", diaryRouter)

// DiaryApp 
app.use(express.static(path.join(__dirname, "..", "/frontend/public")))
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`));
})

app.listen(PORT, () => {
  console.log("Server up and running on http://localhost:5000")
})