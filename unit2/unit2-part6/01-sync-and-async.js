
// Your computer or phone or whatever these days has multiple cores.
// JavaScript programs only ever use one core.
// that is, JS is not multiprocess or multithread

// A JS program only ever does one thing at a time.

// All code we have written so far is SYNCHRONOUS.
// It runs in the order we set out in the program.

// THIS RUNS FIRST
const greeting = 'Hello there!'
// THEN THIS HAPPENS
console.log(greeting)


// BUT
// consider the case where we are waiting for something.
// Could be user input or an internet request or whatever.

// We do not want to stop the whole program unless we have to.

// ASYNCHRONOUS CODE

// Two new keywords:  async   and   await

// The async keyword is only ever used to "decorate" functions like so:

async function simplePrint () {
  console.log('I am running in an async function')
}


