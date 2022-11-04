const { Cheese } = require("../models")
const db = require("./db")
async function seed () {

  await db.sync({ force: true })

  await Cheese.create({
    id: "1", title: "gouda",
    likes: 43545,
    published: 1
  })
  await Cheese.create({
    title: "2k"
  })
}

seed()