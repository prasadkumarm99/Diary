const router = require("express").Router()
const Page = require("../models/pageModel")
const auth = require("../auth")

router.post("/add", auth, async (req, res) => {
  try {
    const page = new Page({ 
      ...req.body,
      author: req.user._id
     })
    const newPage = await page.save()
    if (newPage) {
      res.status(201).send(newPage)
    } else {
      throw new Error()
    }
  } catch (err) {
    res.status(400).send()
  }
})

router.patch("/edit/:date", auth, async (req, res) => {
  try{
    const { date } = req.params
    await Page.findOneAndUpdate({ date }, { content: req.body.content })
    const update = await Page.findOne({ date })
    if (!update) {
      throw new Error()
    }
    res.send(update)
  } catch(e) {
    res.status(304).send()
  }
})

router.delete("/remove/:date", auth, async (req, res) => {
  try{
    const pop = await Page.findOneAndRemove({ date: req.params.date })
    if (!pop) {
      throw new Error()
    }
    res.send(pop)
  } catch(e) {
    res.status(400).send()
  }
})

router.get("/pages", auth, async (req, res) => {
  try {
    const pages = await Page.find({ author: req.user._id })
    if (pages) {
      res.status(302).send(pages)
    } else {
      throw new Error()
    }
  } catch(err) {
    res.status(404).send()
  }
})

module.exports = router