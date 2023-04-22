
// We don't know how long everything will take.
// Examples:
//  - fetching content from the internet
//  - performing a long computation
//  - waiting for user input, etc.

// async function fetchGoog() {
//   const respPromise = fetch('https://www.google.com')
//   console.log(respPromise)

//   const resp = await fetch('https://www.google.com')
//   console.log(resp)
// }

// // fetchGoog()
// //   .then(result => console.log(result))

// fetchGoog()


async function printColor() {
  const readline = require('readline/promises')
  const rl = readline.createInterface(
    process.stdin, process.stdout)

  const color = await rl.question('What is your favorite color? ')

  console.log(color)

  console.log('Here is your favorite color:')
  console.log(`Your favorite color is ${color}.`)

  return color
}

// console.log(`Your color is ${printColor()}.`)


async function logColor () {
  const color = await printColor()
  console.log(color)
}

logColor()
