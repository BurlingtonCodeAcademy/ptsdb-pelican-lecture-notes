const readline = require('readline/promises')
const rl = readline.createInterface(
  process.stdin, process.stdout)

rl
  .question('What is your favorite color? ')
  .then(result => console.log(result))


