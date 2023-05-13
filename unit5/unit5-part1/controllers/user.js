const express = require('express')
const router = express.Router()

const { posts, users } = require('../db')
// above line also does the next two lines
// const posts = db.posts
// const users = db.users


router.get('/all', (req, res) => {
  res.json(users)
})

router.get('/:userId', (req, res) => {
  // find appropriate user
  const user = users.find(
    user => user.userId === parseInt(req.params.userId)
  )

  // send it back to the user
  res.json(user)
})

// implement a POST endpoint here
router.post('/new', (req, res) => {
  // your code goes here
  // remember req.body is a thing
  
})



module.exports = router