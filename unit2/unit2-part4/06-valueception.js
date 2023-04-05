
// Objects can contain arrays as values

const favoriteNumbers = {
  mary: [22, 14, 32],
  henry: [],
  eli: [0, -1, 65536, 65535]
}

for (const person in favoriteNumbers) {
  for (const number of favoriteNumbers[person]) {
    console.log(`${person} likes ${number}!`)
  }
}


// arrays can contain objects

// const staff = [
//   {name: 'Eli', color: 'green', onNotice: true},
//   {name: 'Mary', color: 'pink', onNotice: false},
//   {name: 'Henry', color: 'black', onNotice: true}
// ]

for (const person of staff) {
  console.log(
    `${person.name} is on notice: ${person.onNotice}` 
  )
}

staff[0].fact = 'french fries are the best oops I meant freedom fries'


// objectception


const staff = [
  {
    name: 'Eli',
    color: 'green',
    onNotice: true,
    favoriteNumbers: [0, -1, 65536, 66535],
    pet: {
      type: 'dog',
      breed: 'saint bernard',
      name: 'Shannon'
    }
  },
  {
    name: 'Mary',
    color: 'pink',
    onNotice: false,
    favoriteNumbers: [22, 14, 32],
    pet: {
      type: 'dog',
      breed: 'mutt',
      name: 'River'
    }
  },
  {
    name: 'Henry',
    color: 'black',
    onNotice: true,
    favoriteNumbers: [],
    pet: null
  }
]

console.log(staff[1].pet.name)

for (const person of staff) {
  if (!person.onNotice) {
    console.log(`${person.name} is not on notice!!`)
  }
}