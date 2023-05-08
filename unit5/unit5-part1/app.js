// two ways of importing and exporting in JS
// one uses "import" and "export"
// the other (node.js-specific)
//   uses "require" and "module.exports"

const express = require('express')
const app = express()

const db = require('./db')


app.get('/', (req, res) => {
  res.send('yes I got your GET request')
})

app.get('/all', (req, res) => {
  res.json(db)
})

app.get('/:id', (req, res) => {
  console.log(req.params.id)

  // find appropriate post
  const post = db.find(post => post.id === req.params.id)

  // send it back to the user
  res.json(post)
})


app.listen(4004, () => {
  console.log('app is listening')
})