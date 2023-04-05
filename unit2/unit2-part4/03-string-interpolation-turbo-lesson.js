

// We can add strings together.

const mushedString = 'Hello ' + 'world!'

console.log(mushedString)



// The *better* way to do this
//  IF YOU ARE USE DATA IN YOUR STRINGS
// is something called _string interpolation_.

const num0 = 14
const num1 = 80.8

console.log(`This is a string!`)
console.log(`Our values are ${num0} and ${num1}.`)
console.log(`${num0} divided by ${num1} is ${(num0 / num1).toPrecision(2)}`)

// but wait, when we were talking about objects
// we said that we can access their properties with dot notation
// The truth is we are doing the same kind of thing here.
// All values in JS have some built-in properties and we can
//    access them with the dot.

console.log('dalmatian'.toUpperCase())