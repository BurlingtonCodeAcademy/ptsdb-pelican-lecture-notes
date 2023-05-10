// two ways of importing and exporting in JS
// one uses "import" and "export"
// the other (node.js-specific)
//   uses "require" and "module.exports"

const express = require('express')
const app = express()



const postRouter = require('./routes')


// Set global variables
const PORT = 4004
// const BASEURL = // root URL of an API, etc.


app.use(express.json())


app.use('/post', postRouter)



app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})