
// GOOD TOOLS :)

// STRINGS

const greeting = 'Hello there!'

console.log(greeting.length)
console.log(greeting[0])
console.log(greeting.concat(' You! You there!'))
console.log(greeting.includes('ll'))
console.log(greeting.indexOf('ll')) // if it's in the string
console.log(greeting.indexOf('banana'))

if (greeting.indexOf(substr) < 0) {
  // do stuff here that says "hey, didn't find your substr, pal"
}

console.log('Banana.'.padStart(20))
console.log('Here banana.'.padStart(20))

console.log('Boston Market'.substring(7))

const substrs = 'Boston Market'.split('')
console.log(substrs)

console.log('McDonalds'.repeat(100))

const sydneW = 'Wendys'.split('').reverse().join('')
//            ( ('Wendys'.split('') ).reverse() ).join('')
console.log(sydneW)


// ARRAY MAGIC

const primes = [2, 3, 5, 7, 11, 13]

// primes.reverse()
// console.log(primes.indexOf(7))
const longer = primes.concat([17, 19])

console.log(primes)
console.log(longer)



// OBJECT MAGIC

const euroCountries = {
  Germany: true,
  Lithuania: false,
  Netherlands: true,
  Romania: false,
  Ukraine: false,
  Luxembourg: true
}

for (const country in euroCountries) {
  console.log(euroCountries[country])
}

console.log([1, 3, 5, 9, 11]['0'])


// recap.

// there are TWO WAYS to get properties from objects
// 1. DOT NOTATION, example:
console.log(euroCountries.Netherlands)

// 2. BRACKET NOTATION, example
console.log(euroCountries['Nether' + 'lands'])


function getNandNPlus1 (arr, n) {
  return [arr[n], arr[n + 1]]
}
console.log(getNandNPlus1([0,0,0,0,0,0,0,7,7,7,7,7,7,7,7], 9))


// HOW TO GET ALL THE KEYS AND VALUES OUT OF AN OBJECT
//  ...without looping
const addresses = {
  '5034': '14 Delaware St',
  '6622': '8763 Peachtree Ln',
  '0991': '123 Main St'
}

console.log(Object.keys(addresses))
console.log(Object.values(addresses))
console.log(Object.entries(addresses))









