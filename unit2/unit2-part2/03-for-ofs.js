
let names = [
  'Octavius',
  'Brutus',
  'Cassius',
  'Cicero',
  'Marcus',
  'Julius',
  'Billy'
]

// so

// a LOOP is a statement including a block of code
//    (and recall: a block of code is a series of statements)
// that can run the statements in the block of code
// a certain number of times (you can specify how many times)


// English loop:
// "For (every thing of this_list_of_things), 
//    1. take thing
//    2. throw thing against the wall."


// OUR FIRST LOOOOOP
for (const name of names) {
  console.log('Hello, ' + name + '!')
  console.log('That\'s a great name.\n')
}

// to make a for-of loop
//   for (let ____ of ___(any expression)___) {
//     sequence
//     of
//     statements
//   }

const numbers = [5, 7, 9, 11, 13]

for (const num of numbers) {
  console.log(num + ' plus 6 is ' + (num + 6))
}





// strings can also be iterated over with for-of loops

for (let letter of 'monkey') {
  console.log(letter)
}


