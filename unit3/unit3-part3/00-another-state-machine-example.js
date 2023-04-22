
const map = {
  Indianapolis: {  // object beginning on this line is accessed with map['Indianapolis']
    Chicago: 250,
    Louisville: 200,
    'St. Louis': 250,
    Cincinnati: 150,
    Columbus: 200,
    Detroit: 300
  },
  Chicago: {
    Indianapolis: 250,
    'St. Louis': 350,
    Madison: 100,
    Milwaukee: 50,
    Quincy: 200,
    Detroit: 200
  },
  Louisville: {
    Indianapolis: 150,
    Columbus: 100,
    Cincinatti: 125,
    Nashville: 175
  },
  Nashville: {
    Pensacola: 450
  },
  Cincinnati: {
    Chicago: 350
  }
}


class Airplane {
  constructor (serial, type, currentLocation, range) {
    this.serial = serial
    this.type = type
    this.currentLocation = currentLocation
    this.range = range
  }

  // add a method to change location (i.e. to fly somewhere)
  fly (newLocation) {
    //      when this.currentLocation is string 'Indianapolis'
    //                            map['Indianapolis']
    //                        or  map.Indianapolis
    const possibleDestinations = map[this.currentLocation]
    
    // first IF condition checks if newLocation is in the route mapping object
    //    for the current city
    if (newLocation in possibleDestinations) {
    
      // equiv to (when newLocation is string 'Chicago')
         // possibleDestinations.Chicago
      if (possibleDestinations[newLocation] > this.range) {
        console.log('Too far away. Try again.')
      } else {
        console.log(`Flying to ${newLocation}...`)
        this.currentLocation = newLocation
      }
    } else {
      console.log(`Cannot fly to ${newLocation}. Try again.`)
    }

  }

  getDestinations () {
    const potentialDests = map[this.currentLocation]
    for (const c in potentialDests) {
      if (potentialDests[c] <= this.range) {
        console.log(c.toUpperCase())
      }
    }
  }
}



const plane0 = new Airplane('NCC1701', 'Boeing', 'Indianapolis', 200)

console.log(plane0)

// plane0.fly('Cincinnati')

// console.log(plane0)

plane0.getDestinations()