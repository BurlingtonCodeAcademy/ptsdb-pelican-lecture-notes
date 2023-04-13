
// Using the following array which I asked ChatGPT to make,
// 0. First! Note Gorbachev died on August 30, 2022. Modify the array in place USING JAVASCRIPT to set his death date appropriately.
// 1. Then, map out all the last names into a new array (i.e. ['Lenin', 'Stalin', ...])
// 2. Create a function that does this mapping.
// 3. Now modify the function so it takes one of the properties of the objects as a second argument.
//    The function should return an array with the mapping selecting THAT property.

// BONUS 1 (medium). Create a function that filters the soviet leaders array by only including
//                    those leaders who had more than one official title.
// BONUS 2 (pretty hard). Use the data from the second object to add an 'ascensionDate' field to each object in sovietLeaders.


const sovietLeaders = [
  {
    firstName: "Vladimir",
    lastName: "Lenin",
    birthdate: "1870-04-22",
    deathDate: "1924-01-21",
    officialTitles: [
      "Chairman of the Council of People's Commissars of the Soviet Union"
    ]
  },
  {
    firstName: "Joseph",
    lastName: "Stalin",
    birthdate: "1878-12-18",
    deathDate: "1953-03-05",
    officialTitles: [
      "General Secretary of the Central Committee of the All-Union Communist Party (Bolsheviks)"
    ]
  },
  {
    firstName: "Nikita",
    lastName: "Khrushchev",
    birthdate: "1894-04-15",
    deathDate: "1971-09-11",
    officialTitles: [
      "First Secretary of the Central Committee of the Communist Party of the Soviet Union"
    ]
  },
  {
    firstName: "Leonid",
    lastName: "Brezhnev",
    birthdate: "1906-12-19",
    deathDate: "1982-11-10",
    officialTitles: [
      "First Secretary of the Central Committee of the Communist Party of the Soviet Union",
      "General Secretary of the Central Committee of the Communist Party of the Soviet Union"
    ]
  },
  {
    firstName: "Yuri",
    lastName: "Andropov",
    birthdate: "1914-06-15",
    deathDate: "1984-02-09",
    officialTitles: [
      "General Secretary of the Central Committee of the Communist Party of the Soviet Union"
    ],
    prop: 'hi there yuri'
  },
  {
    firstName: "Konstantin",
    lastName: "Chernenko",
    birthdate: "1911-09-24",
    deathDate: "1985-03-10",
    officialTitles: [
      "General Secretary of the Central Committee of the Communist Party of the Soviet Union"
    ]
  },
  {
    firstName: "Mikhail",
    lastName: "Gorbachev",
    birthdate: "1931-03-02",
    deathDate: null,
    officialTitles: [
      "General Secretary of the Central Committee of the Communist Party of the Soviet Union",
      "President of the Soviet Union"
    ]
  }
]

const mG = sovietLeaders[sovietLeaders.length - 1]
// console.log(mG)

mG.deathDate = '2022-08-30'
mG.hairColor = 'piebald'
mG.appearedInPizzaHutAd = true

// console.log(sovietLeaders)


const sovietLeadersAscension = {
  "Vladimir Lenin": "1917-10-25",
  "Joseph Stalin": "1922-04-03",
  "Nikita Khrushchev": "1953-09-07",
  "Leonid Brezhnev": "1964-10-14",
  "Yuri Andropov": "1982-11-12",
  "Konstantin Chernenko": "1984-02-13",
  "Mikhail Gorbachev": "1985-03-11"
}



// code can go here and you can use the `sovietLeaders` array

function getLastName (arr, prop) {
  return arr.map((leader) => leader[prop])
}

const lastNames = getLastName(sovietLeaders, 'officialTitles')

console.log(lastNames)

// const lenin = sovietLeaders[0]

// lenin.lastName

// const mappingFunction = (leader) => leader.lastName

// console.log([
//   mappingFunction(sovietLeaders[0]),
//   mappingFunction(sovietLeaders[1]),
//   mappingFunction(sovietLeaders[2]),
//   mappingFunction(sovietLeaders[3]),
//   mappingFunction(sovietLeaders[4]),
//   mappingFunction(sovietLeaders[5]),
//   mappingFunction(sovietLeaders[6])
// ])

// console.log(mG.officialTitles[0])