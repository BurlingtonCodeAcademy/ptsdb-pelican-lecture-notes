// Let's model a zoo with classes.

class Zoo {
  constructor (name, tagline, animals) {
    this.name = name
    this.tagline = tagline
    this.animals = animals
  }

  printBanner () {
    console.log(`${this.name.toUpperCase()}: ${this.tagline}!!!`)
  }

  addAnimal (animal) {
    this.animals.push(animal)
  }

  paradeZoo () {
    for (const a of this.animals) {
      console.log(`${a.name} says ${a.sound}.`)
    }
  }
}


class Animal {
  constructor (species, name, birthdate, adoptiondate, sound) {
    this.species = species
    this.name = name
    this.birthdate = birthdate
    this.adoptiondate = adoptiondate
    this.sound = sound
  }

  getAge () {
    return (new Date()).getFullYear() - this.birthdate.getFullYear()
  }

  getTimeAtZoo () {
    return (new Date()).getFullYear() - this.adoptiondate.getFullYear()
  }
}


// class Monkey {

// }




//========================================

const ourZoo = new Zoo(
  'Pelican Zoo',
  'Pelicans, yes, and much much more',
  []
)

ourZoo.printBanner()


const frank = new Animal(
  'chimpanzee',
  'Frank',
  new Date(2017, 4, 12),
  new Date(2020, 6, 10),
  'I want banana'
)
ourZoo.addAnimal(frank)

// const amelia = new Animal(
//   'hippopotamus', 'Amelia', 6, 'roar'
// )
// ourZoo.addAnimal(amelia)

// const tom = new Animal(
//   'lemur', 'Tom Bergeron', 2, 'squeak'
// )
// ourZoo.addAnimal(tom)

const frankAge = frank.getTimeAtZoo()

console.log(frankAge)





// ourZoo.paradeZoo()