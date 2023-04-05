

//    AN EXPRESSION
// IS AN EXPRESSION
// IS AN EXPRESSION ETC.

// Ben's favorite operator is the logical AND: &&


// Remember, an expression is built of small pieces:
//   - literals like '3', 3, or true
//   - variables

const var0 = 13
const var1 = 48.6

// Then, we can build up more complicated expressions using these "atoms"

console.log(7 + var0)


// One other building block of expressions we have seen is
//   function calls!

function add10 (x) {
  return x + 10
}

console.log(1.5 + add10(3))


// The following is a set of examples of how we can use
//  the above rules in practice

// functions can be called arbitrarily many times
console.log(add10(5) + add10(6))

// functions can be called on the output of other functions
const result = add10(5)
console.log(add10(result))
// THIS IS EQUIVALENT TO THE FOLLOWING
console.log( add10( add10(5) ) )


// Remember, an ARRAY is a list of values
// We write arrays with [ and ], values separated by commas

// Functions bind ANY value to a variable

function getArrayLength (arr) {
  return arr.length
}

// const muppets = ['Kermit', 'Gonzo', 'Fozzie', 'Miss Piggy']
// console.log( getArrayLength(muppets) )
console.log('The first thing out of the muppets array is ' + muppets[0] )


function getFirstThingFromArray (arr) {
  return arr[0]
}
console.log('Using our getFirstThingFromArray function, we also get '
             + getFirstThingFromArray(muppets))

function getNthThingFromArray (xerxes, n) {
  return xerxes[n]
}

const muppets = ['Kermit', 'Gonzo', 'Fozzie', 'Miss Piggy']

for (const i in muppets) {
  console.log( getNthThingFromArray(muppets, i) )
}



// 

const arr1 = ['King Kong', 'Godzilla', 'Mothra', 'Barney the Dinosaur']
console.log(arr1[0])

console.log( ['King Kong', 'Godzilla', 'Mothra', 'Barney the Dinosaur'].length )




function mod4 (n) {
  return n % 4
}

function mod5 (n) {
  return n % 5
}

function getNumExtraWheels (n) {
  return (n % 4) + 1 // some more logic here
}

// assume our program was about auto parts
const cylinders = 10

console.log(mod4(cylinders))








