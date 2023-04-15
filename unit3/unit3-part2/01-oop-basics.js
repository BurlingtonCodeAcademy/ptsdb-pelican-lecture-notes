
// const str = "just a string"
// const num = 55

// const obj = {
//   prop0: str,
//   prop1: num,
//   prop3: [0, 2, 4, 8, 16]
// }

// console.log(obj.prop3[2])

// THIS IS ALL FINE/REVIEW.

// Object-Oriented Programming
// Idea: think of everything as a "thing"
//   and implement it that way

// the class itself is not an LogEntry object
class LogEntry {
  constructor (time, message, user) {
    this.time = time
    this.message = message
    this.user = user
  }

  getUser () {
    return this.user.toUpperCase()
  }

  getArrayOfData () {
    return [
      this.time,
      this.message,
      this.user
    ]
  }
}

// store and get the time of the log out
// store and get the log message
// store and get what user was logged in


const logentry1 = new LogEntry(
  '2023-04-15T17:20:26UTC',
  'user not authorized',
  'henrydufour'
)
const logentry2 = new LogEntry(
  '2023-04-15T17:21:26UTC',
  'user logged in successfully',
  'henrydufour'
)

// console.log(logentry1)

console.log(logentry1)
console.log(logentry2)

