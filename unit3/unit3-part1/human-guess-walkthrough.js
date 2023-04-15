
const MAX_GUESSES = 7
const MIN_NUMBER = 0
const MAX_NUMBER = 100


const readline = require('readline/promises')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getRandInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// for (let i = 0; i < 500; i++) {
//   console.log(getRandInt(40,60))
// }


start()

async function start () {
  
  let guesses = 0
  const secret = getRandInt(MIN_NUMBER, MAX_NUMBER)

  while (guesses < MAX_GUESSES) {
    const guess = await rl.question(
      `Guess a number between ${MIN_NUMBER} and ${MAX_NUMBER}.  `)
    
    if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
      console.log('Number not in range, please try again.')
    } else if (guess < secret) {
      console.log(`${guess} is too low, guess higher!`)
      guesses = guesses + 1
    } else if (guess > secret) {
      console.log(`${guess} is too high, guess lower!`)
      guesses = guesses + 1
    } else {
      console.log(`Yeah, ok, you win. It was ${guess}.`)
      process.exit()
    }
  }
  console.log('Nope, you failed miserably to guess my secret number...')


  process.exit()
}