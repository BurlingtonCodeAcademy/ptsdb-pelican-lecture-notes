
// OBJECTS

// objects are just key-value pairs. that's it.

// so, there are keys, and each key corresponds to a value
// (the keys are always strings)

// A BASIC OBJECT
const fruitInventory = {
  apple: 4,
  banana: 19,
  oranges: 2,
  plum: 0,
  tangerine: 103,
  nectarine: 80,
  peach: 25
}

// console.log(fruitInventory)
// console.log(typeof fruitInventory)


// HOW DO WE GET THINGS OUT OF OBJECTS
// Use dot-property access

console.log(fruitInventory.apple)

console.log(fruitInventory.plum + 4)


// ==================

const fruitsOfInterest = ['plum', 'banana']

console.log(fruitInventory.plum)
console.log(fruitInventory.banana)



// DATA IN JAVASCRIPT IS VALUES
// strings, numbers, booleans, arrays, and objects
//    are all values
// VARIABLES HOLD VALUES

const strvar = 'Garfield'
const numvar = 55
const boolvar = false
const arrvar = [2, 5, 7]
const objvar = {
  a: 1,
  b: 2
}

console.log(objvar.a)