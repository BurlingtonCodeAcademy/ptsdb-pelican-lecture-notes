
class FlyingVehicle {
  // put all logic in here that pertains to ANY flying vehicle
  constructor () {
    this.typeofvehicle = 'airborne'
  }
}

class Helicopter extends FlyingVehicle {
  // put ONLY the logic that is specific to helicopters
  constructor (make, year) {
    super()
    this.make = make
    this.year = year
  }
}

const h1 = new Helicopter()
// const h2 = Helicopter()

console.log(h1.typeofvehicle)