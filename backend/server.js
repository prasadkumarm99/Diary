const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const port = process.env.PORT || 5000



const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "/frontend/public")))

app.listen(port, () => {
  console.log("Server up and running on http://localhost:5000")
})