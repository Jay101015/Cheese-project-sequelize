const { Model, DataTypes } = require("sequelize")
const db = require("../db/db")

class Cheese extends Model {}

Cheese.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.TEXT,
    
  },
  tasty: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, { sequelize: db })

module.exports = Cheese