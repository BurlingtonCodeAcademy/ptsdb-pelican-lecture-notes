
// THERE ARE DIFFERENT TYPES OF OPERATORS IN JS
//   and you can classify them a few different ways.

// (remember, operators are the building blocks of complicated expressions,
//    we use them to build up bigger expressions from smaller expressions)

// One way to categorize is by how many "operands" the operator takes
// Unary, binary, or ternary

// The other way is by what the compound expression evaluates to

// NUMERIC OPERATORS
let v00 = 4 + 10
let v01 = 90 * -6

// aside: there is a way to find out the *type* of a variable or expression
console.log(typeof 3)
console.log(typeof 'hello there')
console.log(typeof false)


// remember again that + changes depending on what type of values its operands are
let v02 = 'hello ' + 'mr policeman'
let v03 = 'the number five is written with ' / 5
console.log(v03)



// another type of operator is a
// BOOLEAN OPERATOR

// recall a boolean is either true or it is false and there is nothing else
// 1. AND
console.log(false && false)  // false
console.log(false && true)   // false
console.log(true && false)   // false
console.log(true && true)    // true

// 2. OR
console.log(false || false)  // false
console.log(false || true)   // true
console.log(true || false)   // true
console.log(true || true)    // true

// 3. NOT
console.log(!false)  // true
console.log(!true)   // false


// THE BIG SECRET ABOUT BOOLEAN OPERATORS
// and how they *really* work

console.log(0 && 4)

console.log(0 || 4)

// values that evaluate to TRUE (in a boolean context) are called 'truthy' values (sorry)
// 1. truthy numbers are EVERY NUMBER EXCEPT 0 (and NaN)
// 2. truthy strings are ALL NONEMPTY STRINGS (i.e. everything except '' and "")
// 3. the only truthy boolean is true

console.log(Boolean(0))


// motivation via if statements

let userInput = 'Mary'

if (!userInput) {
  console.log('you entered nothing')
}


if ([0, 1].length) {
  console.log('there are more than zero elements in the list')
}



//  COMPARISON OPERATORS
let v10 = 3 > 2  // right hand side is evaluated to true
let v11 = 3 > 4  // right hand side (RHS) is evaluated to false

console.log(v10 + ' vs ' + v11)
console.log(true)
console.log(4)