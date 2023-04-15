

// objects are just mappings from keys to values

const stateAbbrs = {
  Illinois: 'IL',
  Indiana: 'IN',
  Ohio: 'OH',
  Kentucky: 'KY',
  Tennessee: 'TN'
}

// for (const state of ['Illinois', 'Kentucky']) {
//   console.log(stateAbbrs[state])
// }

// lookups use brackets if we do it programatically




// state machine

const lightStates = {
  red: ['green', 'yield'],
  green: ['yellow'],
  yellow: ['red'],
  yield: ['red']
}

// let currentLightState = 'red'


// function transition (newState) {
//   const validNexts = lightStates[currentLightState]

//   // first, check for invalid transition
//   if (!validNexts.includes(newState)) {
//     console.log('Invalid transition, try again.')
//   } else {
//     console.log(`Moving to ${newState} state.`)
//     currentLightState = newState
//   }
// }


// console.log(currentLightState)

// transition('green')

// console.log(currentLightState)

// transition('yellow')

// console.log(currentLightState)

// transition('yield')

// console.log(currentLightState)



// ============================================

class StateMachine {
  constructor (definition, initial) {
    this.states = definition
    this.current = initial
  }

  transition (newState) {
    const validNexts = this.states[this.current]
  
    // first, check for invalid transition
    if (!validNexts.includes(newState)) {
      console.log('Invalid transition, try again.')
    } else {
      console.log(`Moving to ${newState} state.`)
      this.current = newState
    }
  }
}

const stoplight = new StateMachine(
  lightStates, 'red'
)


const vendingMachineDef = {
  waiting: ['coin-inserted'],
  'coin-inserted': ['waiting', 'selected'],
  selected: ['waiting', 'vending'],
  vending: ['waiting']
}

const vendingMachine = new StateMachine(
  vendingMachineDef, 'waiting'
)

module.exports = vendingMachine