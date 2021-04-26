const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Post = sequelize.define('post',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  heading: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.TEXT},
  img: {type: DataTypes.STRING},
  video: {type: DataTypes.STRING}
})

User.hasMany(Post)
Post.belongsTo(User)

module.exports = {
  User, Post
}