const router = require("express").Router()
const Page = require("../models/pageModel")

router.post("/add", async (req, res) => {
  try {
    const { content, date } = req.body
    const page = new Page({ content, date })
    const newPage = await page.save()
    if (newPage) {
      res.status(201).send(newPage)
    } else {
      res.status(400).send()
    }
  } catch (err) {
    res.status(400).send()
  }
})

router.get("/pages", async (req, res) => {
  try {
    const pages = await Page.find({})
    if (pages) {
      res.status(302).send(pages)
    } else {
      res.status(404).send
    }
  } catch(err) {
    res.status(404).send()
  }
})

module.exports = router