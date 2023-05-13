
const express = require('express')
const router = express.Router()

const { posts, users } = require('../db')
// above line also does the next two lines
// const posts = db.posts
// const users = db.users


function handler (req, res) {
  res.send(req.headers['content-type'])
}

router.get('/', handler)

// express waits until it gets a GET request at the / endpoint
// when it gets that request, it creates a req and res object
// THEN it calls handler and passes it those two objects
// (handler is a function that takes in those objects as arguments)


router.get('/all', (req, res) => {
  res.json(posts)
})

router.get('/:id', (req, res) => {
  // find appropriate post
  const post = posts.find(post => post.id === req.params.id)

  // send it back to the user
  res.json(post)
})

router.get('/author/:userId', (req, res) => {
  const postsFiltered = posts.filter(
    post => post.userId === parseInt(req.params.userId)
  )
  res.json(postsFiltered)
})

router.post('/new', (req, res) => {
  // db.sort((a, b) => parseInt(a.id) < parseInt(b.id))
  // console.log(db)
  // console.log(parseInt(db.at(-1).id) + 1)

  const ids = db.map(p => parseInt(p.id))
  let newId = Math.max(...ids) + 1
  newId = newId.toString().padStart(3, '0')

  req.body.id = newId

  db.push(req.body)

  res.send('added new post')
})


router.put('/:id', (req, res) => {
  let postIndex = db.findIndex(
    post => parseInt(post.id) === parseInt(req.params.id)
  )
  
  const id = db[postIndex].id

  db[postIndex] = req.body
  db[postIndex].id = id

  res.json({
    message: 'update successful',
    recordUpdated: req.body
  })  
})

// write the code for a PATCH endpoint at '/:id'
router.patch('/:id', (req, res) => {
  // your code goes here!

  // find the right object in the db
  let post = db.find(
    post => parseInt(post.id) === parseInt(req.params.id)
  )

  // modify it appropriately
  // NOTE: do not replace the entire object,
  //       just find a way to change the parts that the
  //       request specified
  const updatedFields = []
  if (req.body.author !== undefined) {
    post.author = req.body.author
    updatedFields.push('author')
  }
  if (req.body.content !== undefined) {
    post.content = req.body.content
    updatedFields.push('content')
  }
  if (req.body.emoji !== undefined) {
    post.emoji = req.body.emoji
    updatedFields.push('emoji')
  }

  // send something back to the client confirming the edit
  res.json({
    message: `updated record ${post.id}`,
    updatedFields
  })
})


router.delete('/:id', (req, res) => {
  // this code has to actually do the deleting

  const index = db.findIndex(
    post => parseInt(post.id) === parseInt(req.params.id)
  )
  const deleted = db.splice(index, 1)

  res.json({
    message: 'deletion successful',
    recordsDeleted: deleted
  })
})



module.exports = router