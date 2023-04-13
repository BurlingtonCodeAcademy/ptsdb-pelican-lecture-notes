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

const frenchPresidents = [
  {
    firstName: "Charles",
    lastName: "de Gaulle",
    birthdate: "1890-11-22",
    deathDate: "1970-11-09",
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "Georges",
    lastName: "Pompidou",
    birthdate: "1911-07-05",
    deathDate: "1974-04-02",
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "Valéry",
    lastName: "Giscard d'Estaing",
    birthdate: "1926-02-02",
    deathDate: "2020-12-02",
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "François",
    lastName: "Mitterrand",
    birthdate: "1916-10-26",
    deathDate: "1996-01-08",
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "Jacques",
    lastName: "Chirac",
    birthdate: "1932-11-29",
    deathDate: "2019-09-26",
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "Nicolas",
    lastName: "Sarkozy",
    birthdate: "1955-01-28",
    deathDate: null,
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "François",
    lastName: "Hollande",
    birthdate: "1954-08-12",
    deathDate: null,
    officialTitles: ["President of the French Republic"]
  },
  {
    firstName: "Emmanuel",
    lastName: "Macron",
    birthdate: "1977-12-21",
    deathDate: null,
    officialTitles: ["President of the French Republic"]
  }
]



// 0.
// one-step
sovietLeaders[sovietLeaders.length - 1].deathDate = '2022-08-30'

// two-step
const gorby = sovietLeaders[sovietLeaders.length - 1]
gorby.deathDate = '2022-08-30'



// 1.
// arrow function inside .map
const lastNames = sovietLeaders.map(
  // arrow function takes in leader object and spits out last name of the leader
  (leader) => leader.lastName
)

// define function seperately and pass to .map
function getLastName (leader) {
  return leader.lastName
}
const lastNamesAlt = sovietLeaders.map(getLastName)


// 2.
// as traditional function
function getLastNamesGeneric (arr) {
  return arr.map(leader => leader.lastName)
}

// console.log(getLastNamesGeneric(sovietLeaders))
// console.log(getLastNamesGeneric(frenchPresidents))


// as arrow function
const gLNGArrow = (arr) => arr.map(leader => leader.lastName)

// console.log(gLNGArrow(sovietLeaders))
// console.log(gLNGArrow(frenchPresidents))



// 3.
function getProperty (arr, prop) {
  return arr.map(leader => leader[prop])
}

// console.log(getProperty(sovietLeaders, 'officialTitles'))

// These are equivalent:
//  const prop = 'officialTitles'
//  sovietLeaders[prop]
//
//  sovietLeaders.officialTitles



// BONUS 1.
const filterByMultiTitles = (leaders) => leaders.filter(
  leader => leader.officialTitles.length > 1
)

// DOUBLE BONUS FOR LATER:
// rewrite lines 189-191 as a traditional function

const vainSoviets = filterByMultiTitles(sovietLeaders)

console.log(vainSoviets)


// {
//   firstName: "Vladimir",
//   lastName: "Lenin",
//   birthdate: "1870-04-22",
//   deathDate: "1924-01-21",
//   officialTitles: [
//     "Chairman of the Council of People's Commissars of the Soviet Union"
//   ]
// },


//
// const sovietLeadersAscension = {
//   "Vladimir Lenin": "1917-10-25",
//   "Joseph Stalin": "1922-04-03",
//   "Nikita Khrushchev": "1953-09-07",
//   "Leonid Brezhnev": "1964-10-14",
//   "Yuri Andropov": "1982-11-12",
//   "Konstantin Chernenko": "1984-02-13",
//   "Mikhail Gorbachev": "1985-03-11"
// }

// function addAscension (leaders, ascObj) {
//   for (const leader in leaders) {

//   }
// }