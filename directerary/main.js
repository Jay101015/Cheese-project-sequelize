const { Post } = require("./models")
const Cheese = require("./cheese.model")

async function main () {

  const allC = await Cheese.findAll()
  console.table(allCheese.map(p => p.toJSON()))

}

main()