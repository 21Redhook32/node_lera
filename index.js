const express = require('express')
const router = require("./router/index")
const sequelize = require('./db')
const schema = require('./models/schema')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
  res.json('hello world')
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () =>
      console.log('\x1b[36m%s\x1b[0m', `\nServer has been started on port ${PORT}\n`)
    )
  }catch (e) {
    console.log(e)
  }
}

start()

