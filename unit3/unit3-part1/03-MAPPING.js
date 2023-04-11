
// COMMON SITUATION
// You have an array and want to do something to all of the things
// in the array.

const names = [
  'Fred', 'Daphne', 'Velma', 'Shaggy', 'Scooby'
]

// with a loop:
// for (const i in names) {
//   names[i] = names[i].toUpperCase()
// }

// function toUpper (s) {
//   return s.toUpperCase()
// }


const upperNames = names.map(n => n.toUpperCase())
// const upperNames = names.map(toUpper)

console.log(names)
console.log(upperNames)


console.log(
  [1, 2, 3, 4, 5].map(n => Math.cbrt(n) ** 3)
)

// ARRAY     FUNCTION      MAPPED ARRAY
// [            ==>         [
//  1,          ==>          1
//  2,          ==>          1.2599
//  3           ==>          1.4422
//   ]                          ]