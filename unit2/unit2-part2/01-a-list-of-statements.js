
// JS (JavaScript files are *lists of statements*)
//  and when we run the file, the statements are executed in order, one by one.

let firstVar = 14

if (true) {
  console.log('the condition was true!')

  let nestedVar = 'now we have a variable declared inside a code block of an if statement'
  console.log(nestedVar)

  if (false) {
    console.log('this will NEVER print!')
  }
}

// a CODE BLOCK (enclosed with { and }) is a list of statements

let age = 10

if (age < 18) {
  console.log('You are TOO YOUNG to use this program...')

  // maybe here is some command to exit?
  
}

if (age < 12) {
    console.log('Does your mother know you\'re on here?!')
}