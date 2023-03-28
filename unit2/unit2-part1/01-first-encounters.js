
// COMMENTS ====================================================================

// Anything from here to the end of the line...
// ...is a comment. Comments are ignored by the computer.

/*
If you need to write a comment that spans multiple lines,
use CSS-style slash-asterisk comments.
*/


// EXPRESSIONS =================================================================

// simple building blocks of expressions.


// Numbers!

3

-10

8.557


// Strings!

"bicycle"
'bicycle'  // we can use single *or* double quotes

'We can have strings that contain spaces!'


// Booleans! (a.k.a. true and false)

true  //  => true
false




// Basic compound expressions

// numeric expressions

3 + 7

-10 * 43

4.99 / 12;

// grouping

(3 + 7) * 4

6 + (-10 * 43)


// BIG ASIDE:

//                             _        _             
//    ___ ___  _ __  ___  ___ | | ___  | | ___   __ _ 
//  / __/ _ \| '_ \/ __|/ _ \| |/ _ \ | |/ _ \ / _` |
// | (_| (_) | | | \__ \ (_) | |  __/_| | (_) | (_| |
// \___\___/|_| |_|___/\___/|_|\___(_)_|\___/ \__, |
//                                           |___/ 

console.log(3)

console.log('hello ' + 'world' + " I'm Eli")

console.log(3 + 3 + 50 / 12 * (90 - 66) * 0.223 + 1)


// like we saw above, strings can be mushed together (concatenated)
//  by using the + operator

console.log(10 / 3)

console.log(10 % 3)
console.log(11 % 3)
console.log(12 % 3)
console.log(13 % 3)


console.log(-4)
console.log(-(4 + 6))

console.log(-4 + (6 * 7))

/*
        +
      /  \
    /     \
   -       *
   |      / \
   |     /   \
   4    6     7

*/


//
// STATEMENTS (not expressions!) by way of variables!

// Statements are analogous to full sentences in English.

let x = 10

console.log(x)
console.log(x + 3)  // replaces x with 10, then adds 3 to 10
console.log((x + 3) / x)

x = 12
console.log((x + 3) / x)


let y = 30
console.log(x + (y - (-90 * x)))


let s = 'banana'
console.log(s + ' ' + 'split')



let bigExpression = 3 + 3 + 50 / 12 * (90 - 66) * 0.223 + 1
console.log(bigExpression)


let p0 = 'key '    // assigns 'key ' to p0
p0 = p0 + 'lime '  // assigns 'key lime ' = 'key ' + 'lime ' to p0
p0 = p0 + 'pie'    // assigns 'key lime pie' to p0
console.log(p0)


// so, I've implied that you can arbitrarily change the values of variables.
// Usually, this is true!

let vMutable = 10
vMutable = 14
console.log(vMutable)

// But! There are a lot of times we DO NOT WANT THE VALUE TO CHANGE

const vImmutable = 10
vImmutable = 14
console.log(vImmutable)

// I am going to tell you: DEFAULT TO USING const *UNLESS* you need to change a var's value



// REVIEW:

// WHERE CAN EXPRESSIONS GO

let stringVar = 'expression!'  // you can replace this string with ANY expression, simple or complicated

if (5 > 8 + 7) {
  // do stuff
  let z = 100
  console.log(z)
  // do more stuff
}

