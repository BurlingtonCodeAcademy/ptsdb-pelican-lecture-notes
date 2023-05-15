require('dotenv').config()
// ABOVE LINE IS EQUIVALENT TO BELOW 2 LINES
// const dotenv = require('dotenv')
// dotenv.config()

const express = require('express')
const app = express()
// ABOVE 2 LINES ARE EQUIVALENT TO BELOW LINE
// const app = require('express')()

app.use(express.json())

const router = require('./controller.js')

app.use('/', router)

app.listen(38833, () => {
  console.log('hey, I am listening!')
})