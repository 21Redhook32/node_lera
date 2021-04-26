const  bcrypt = require('bcrypt')
const {User} = require('../models/schema')


class UserController {

  createUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
      return res.status(404).json({message: 'Чувак, ты не ввел email или пароль'})
    }

    const candidate = await User.findOne({where: {email}})
    if(candidate) {
      return res.status(404).json({message: 'Чувак, такой email уже есть'})
    }

    const hashPassword = await bcrypt.hash(password, 5)

    const user = await User.create({email, password: hashPassword})

    res.json(user)
  }

  login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if(!user) {
      return res.status(404).json({message: 'Чувак, такого пользователя не существует'})
    }
    const checkPassword = bcrypt.compareSync(password, user.password)

    if(!checkPassword) {
      return res.json({message: 'Чувак, пароль не верный'})
    }

    return res.json({message: 'Чувак, ты залогинился', user})
  }

}

module.exports = new UserController()