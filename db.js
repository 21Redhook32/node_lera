const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('lera', 'root', 'root', {
  dialect: 'mysql',
  dialectOptions: {
    // Your mysql2 options here
  }
})

module.exports = sequelize