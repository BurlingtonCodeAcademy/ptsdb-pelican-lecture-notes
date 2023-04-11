
// NOT THIS: >=

// THIS: => is an arrow. In this context, -> is not an arrow.

const add1 = (n) => n + 1
const greet = (name) => `Hello there, ${name}!`
const constant5 = () => 5
const randInt = () => Math.floor(Math.random() * 100)

function add1Traditional (n) {
  return n + 1
}


// Just so you are aware, not all arrow functions
// are "implicit return".
// We are actually allowed to open up braces!

const add1Nonimplicit = (n) => {
  return n + 1
}



// If you have EXACTLY ONE ARGUMENT to an arrow function,
// you MAY omit the parentheses.

const f0 = (x) => Math.sqrt(x)
const f1 = x => Math.sqrt(x)