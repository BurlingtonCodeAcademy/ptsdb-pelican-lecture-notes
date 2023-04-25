
console.log('is this attached?')

const ourEels = {}

const aquaBox = document.getElementById('aqua-box')
// const eelName = document.getElementById('eel-name')
// can use document.querySelector instead
const eelName = document.querySelector('#eel-name')

function addNewEel() {
  const newEel = document.createElement('img')
  newEel.src = 'eel.jpg'
  newEel.style.maxWidth = '20rem'
  aquaBox.appendChild(newEel)

  const name = eelName.value
  ourEels[name] = newEel

  const deleteButton = document.createElement('button')
  deleteButton.innerText = `Click here to delete ${name}`
  deleteButton.addEventListener('click', () => {
    aquaBox.removeChild(newEel)
    delete ourEels[name]
    eelName.value = ''
    document.body.removeChild(deleteButton)
  })
  document.body.appendChild(deleteButton)
}

// eelAdder is a button that, uh, adds eels
const eelAdder = document.getElementById('eel-adder')
eelAdder.addEventListener('click', addNewEel)

const eelCensus = document.getElementById('eel-census')
eelCensus.addEventListener ('click', (e) => {
  console.log(`There are ${aquaBox.children.length} eels in the aquarium.`)
})


