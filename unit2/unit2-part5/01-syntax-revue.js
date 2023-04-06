
// SYNTAX REVUE


// STATEMENTS

// go either in code blocks delimited by { and }
// or at the root of the file,
// a .js file is a sequence of statements executed in order

// COMMENTS START WITH // AND CONTINUE UNTIL THE END OF THE LINE


// variable declaration and assignment statements

const variable = 4
let mutableVar = 5

mutableVar = 10
// variable = 15   <-- this is reassignment of a constant variable and you will get an error


// conditional statements
if (4 + 10 > 99) {
  //  run all code in this block
  let conditionalVariable = 'not available outside of block'
}

// this won't work --->     console.log(conditionVarible)


// conditional statements with else if and else blocks
if ('hello' === 'there') {
  // if what is in the parens is true, run this code
} else if ('hello' === 7) {
  // if what is in THOSE parens is true, run THIS code
} else {
  // if no condition has been met yet, run THIS code
}

// remember, for conditional statements,
// ONLY ONE BLOCK IS EVER EXECUTED


// Loops

// "traditional for"
//   i is "counter variable"
//   after every time through the loop, we execute the code in the third part of the parenthesized setup
for (let i = 0; i < 100; i++) {  // note: i++  is the same as  i = i + 1
  console.log(i)
}
// after the condition (second part in the parentheses) is NOT met, the statement is done and we move on

// example,
const arr0 = ['Fred', 'Barney', 'Wilma', 'Betty']
for (let i = 0; i < arr0.length; i++) {
  console.log(arr0[i])
}

// you shouldn't have to do that
// because now we have for-of loops

// name the loop variable after WHAT IT IS
for (const person of arr0) {
  console.log(person)
}



// for-in loops have two uses
// first, they go through keys in objects
const obj0 = {
  key0: 0,
  key1: 'value1'
}
for (const k in obj0) {
                       // obj0[k] looks up the value in obj0 at the key stored in variable k
  console.log(`${k} is ${obj0[k]}`)
}

// so, since arrays are objects with keys being the indices (indexes) of their items,
// we can use a for-in loop to get at the indices and go through an array
const nums = [-7, -3, 0, 3, 7]
for (const i in nums) {
  // i takes the value of each index of nums in turn
  console.log(`The item in the nums array at position ${i} is ${nums[i]}`)
}



//#region function definitions
// start with the word function, the name of the function,
//    and the arguments (in, a, list, like, this)

function squaredAverage (arg0, arg1) {
  // then open up a code block
  // do whotever you need to in here
  const avg = (arg0 + arg1) / 2
  // to get an output from the function, return something
  return avg ** 2
}

// then to USE the function, CALL it
// call it by writing its name, immediately followed by parentheses enclosing (its, arguments)
const sqAvg45 = squaredAverage(4, 5)
console.log(sqAvg45)

//#endregion








