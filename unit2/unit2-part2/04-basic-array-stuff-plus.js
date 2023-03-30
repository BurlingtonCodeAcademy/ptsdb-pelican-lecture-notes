

const names = [
  'Octavius',
  'Brutus',
  'Cassius',
  'Cicero',
  'Marcus',
  'Julius',
  'Billy'
]


// Let's just do a bunch of tricks with arrays.
// "tricks" is misleading, these will be very helpful...


// How do we check how many things are in an array?

console.log(names.length)


// user is prompted with "please enter your full name"
let user1 = 'Barack Obama'
let user2 = 'Donald J. Trump'

user1 = user1.split(' ')  // now user1 = ['Barack', 'Obama']
user2 = user2.split(' ')

// if (user2.length > 2) {
//   console.log('Please use only a first and last name.')
// }

// for (const word of user2) {
//   console.log('one word is ' + word)
// }

// we can have arrays that contain other arrays
const prezes = [user1, user2]

for (const wordlist of prezes) {  // wordlist here is each of the arrays of words at a time
  console.log('There are ' + wordlist.length + ' words in ' + wordlist)
}
// for the above,
//  the loop first goes through with wordlist as ['Barack', 'Obama']
//  then it        goes through with wordlist as ['Donald', 'J.', 'Trump']



// How do we get the first thing out of the array?

// Well, one thing you have to get used to: indexing starts at 0

const elements = ['H', 'He', 'Li', 'Be', 'B', 'C']
// indices         0    1     2     3     4    5

// console.log(elements[0])
// console.log(elements[4])

// for (const el of [0, 1, 2, 3, 4, 5]) {
//   // I want to print out "This item is y" where y is each element in turn
//   console.log(   elements[el]   )
// }

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i])
}


// going back to strings

const sWord = 'supercalifragilisticexpialidocious'

// for (const l of sWord) {
//   console.log(l)
// }

for (let i = 0; i < sWord.length; i++) {
  const currentLetter = sWord.charAt(i)
  console.log(currentLetter)
  // let's check for vowelhood(?)
  if (['a', 'e', 'i', 'o', 'u'].includes(currentLetter)) {
    console.log('(that was a vowel, by the way)')
  } else {
    console.log('(just a boring consonant)')
  }
  // if currentLetter is a vowel, else block is skipped
}