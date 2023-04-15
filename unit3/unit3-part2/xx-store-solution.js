
class Company {
  constructor (name, stores, location) {
    this.name = name
    this.stores = stores
    this.location = location
  }
}

class Location {
  constructor (name, type, taxpct) {
    this.name = name
    this.type = type
    this.taxpct = taxpct
  }
}

// class City extends Location {
//   constructor (name, taxpct, state=null) {
//     this.state = state
//   }

//   getTaxpct () {
//     return this.taxpct + this.state.taxpct
//   }
// }

// class State extends Location { 
//   constructor
// }


class Store {

  constructor (name, opened, currOpen, location) {
    this.name = name
    this.opened = opened  // date
    this.currOpen = currOpen  // boolean
    this.location = location  // instance of Location class
    this.inventory = new Inventory(this)
  }

  makeSale (cart) {
    total = 0
    for (const quantitem of cart) {
      const [item, quantity] = quantitem
      if (this.inventory.items[item.id] < quantity) {
        console.log('Cannot process cart, not enough of some item(s)')
        return
      }
      total += (item.cost + (item.cost * this.location.taxpct).toPrecision(2)) * quantity

    }
  }
}

class Inventory {
  constructor (store) {
    this.store = store
    this.items = {}   // object storing {item id: quantity}
  }

  stockItem (item, quantity) {
    if (item.id in this.items) {
      this.items[item.id] += quantity
    } else {
      this.items[item.id] = quantity
    }
  }
}

class Item {
  constructor (id, name, cost) {
    this.id = id
    this.name = name
    this.cost = cost
  }
}



class Cart {
  constructor () {
    this.items = []  // array of two-element arrays, [[item, quant], [item, quant], etc.]
  }

  addItem (item, quantity) {
    this.items.push([item, quantity])
  }
}











module.exports = {
  Store, Location, Inventory, Item, Cart, Company
}
