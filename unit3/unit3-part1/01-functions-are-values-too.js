
// function expressions vs function definition statements

// FUNCTION STATEMENT
function func1 (num, den) {
  return num / den
}

console.log(func1(3, 5))



const func2 = function (num, den) {
  return num / den
}

// func1 and func2 are both functions
// but they can be passed as values just like any other function


function callMyFunc (f, n) {
  f(n)
}


function consoleLogName (name) {
  console.log(`Hello, ${name}!`)
}

callMyFunc(consoleLogName, 'Jebediah')




function callTwiceAndSum (f) {
  console.log(`Argument f is ${f}.`)
  const firstReturn = f()
  const secondReturn = f()
  console.log(`First return was ${firstReturn},`)
  console.log(`second return was ${secondReturn}.`)
  const sum = firstReturn + secondReturn
  console.log(`Returning sum as ${sum}.`)
  return sum
}

function randomInt () {
  return Math.floor(Math.random() * 100)
}

function constant3 () {
  return 3
}

// callTwiceAndSum(constant3)
callTwiceAndSum(randomInt)
// randomInt is passed
