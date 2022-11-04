const { db } = require("./db/db")
const { Cheese } = require("./models")

async function main () {

  const allC = await Cheese.findAll()
  console.table(allCheese.map(p => p.toJSON()))

}

main()