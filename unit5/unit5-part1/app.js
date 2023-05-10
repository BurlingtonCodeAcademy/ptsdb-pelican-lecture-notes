// two ways of importing and exporting in JS
// one uses "import" and "export"
// the other (node.js-specific)
//   uses "require" and "module.exports"

const express = require('express')
const app = express()

const db = require('./db')

app.use(express.json())



function handler (req, res) {
  res.send(req.headers['content-type'])
}

app.get('/', handler)

// express waits until it gets a GET request at the / endpoint
// when it gets that request, it creates a req and res object
// THEN it calls handler and passes it those two objects
// (handler is a function that takes in those objects as arguments)


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

app.get('/author/:name', (req, res) => {
  const posts = db.filter(
    post => post.author === req.params.name
  )
  res.json(posts)
})

app.post('/new', (req, res) => {
  // db.sort((a, b) => parseInt(a.id) < parseInt(b.id))
  // console.log(db)
  // console.log(parseInt(db.at(-1).id) + 1)

  const ids = db.map(p => parseInt(p.id))
  const newId = Math.max(...ids) + 1
  console.log(newId.toString().padStart(3, '0'))

  // db.push(req.body)

  res.send('added new post')
})


app.listen(4004, () => {
  console.log('app is listening')
})