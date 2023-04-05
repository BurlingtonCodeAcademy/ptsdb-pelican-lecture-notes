

// a few more things to know

// TERNARY OPERATORS

// binary ops like + in 2 + 6
// unary ops like in !true

// The ternary operation is a conditional in expression form

             // if THIS                then THIS                          else THIS 
const result = ((3 > 2) ? 'yes, three is greater than two' : 'no, three isn\'t greater than two') + '!!!!!!!!!!!'
console.log(result)


const username = 'UnicornFancier45'
const postgreeting = username.includes('4') ? 'Nice, you included 4.' : 'Maybe put a number at the end?'
const greeting = `Hello ${username}! ${postgreeting}`
console.log(greeting)


const nested = false ? 'just false' : (true ? 'initially false, then true' : 'double false')
console.log(nested)