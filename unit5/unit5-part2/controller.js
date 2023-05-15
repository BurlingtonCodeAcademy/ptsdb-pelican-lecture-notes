const router = require('express').Router()

// all of your endpoints for this router
//   go in this file here

router.get('/', (req, res) => {
  res.send('yes I am listening')
})

router.get('/fish', (req, res) => {
  res.send('fish from router')
})

router.get('/:id', (req, res) => {
  res.send(
    `you sent a request to ${req.params.id}`
  )
})





module.exports = router