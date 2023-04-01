

// WHAT IS A FUNCTION AGAIN?

// a function is just a block of code that we can run with different arguments whenever we want

function printXPlusFour (x) {
  console.log(x + 4)
}

printXPlusFour(3)

printXPlusFour(90)


// However.
// Functions can be useful in two ways (may be both)
//  1. By performing side effects, that is, doing something for the program
//      Example: console.log
//
//  2. By returning a value that is used in an expression
//      Enter the RETURN keyword

//   INPUT ---> function does something with input -----> OUTPUT

function addFour (x) {
  return x + 4
}

const fifty = 30 + 20
const threePlusFour = addFour(3) * 32 + 1
              //  <----  // 7

console.log(threePlusFour)

// Functions can take more than one argument

function add (x, y) {
  if (typeof y != 'number') {
    return 'this is an invalid second argument'
  }
  return x + y
}

console.log(add(44, -42))  // equiv to 44 + -42

console.log(add(44, '-42'))



// Functions can take ZERO arguments


function constantThree () {
  return 3
}

console.log(constantThree())  // equiv to 3



// WHAT IS THE DIFFERENCE BETWEEN
//  constantThree    and    constantThree()


// Functions will ignore arguments that don't match up with variables
//   in their definitions

console.log(constantThree(20))




function earlyStop () {
  return 2
  return 6
}



// mixing returning functions with logging

function processNumbers (x, y, z) {
  const xPlusY = x + y
  console.log('added x and y, now we have ' + xPlusY)

  const xPlusYToZ = xPlusY ** z
  console.log('took that to the zth power:' + xPlusYToZ)

  console.log('finally, adding one...')
  return xPlusYToZ + 1
}

console.log(processNumbers(6, -4, 200))


// A function definition is a STATEMENT usually at the top level of a file

// But a definition does not RUN or EXECUTE the code in function,
// kind of like how a dictionary defines words but does not use them itself




// Finally (for this file)

// IF A FUNCTION RETURNS NOTHING, IT RETURNS undefined

function noReturn (x) {
  const y = x ** 7
  // it is as if we said `return undefined` explicitly!
}

console.log( noReturn(10) )