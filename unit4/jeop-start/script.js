import qs from './qs_organized.js'
// import qs from './qs_original.js'

const round = document.getElementById('round-num').innerText

// const cells = [
//   {},
//   {},
//   {},
//   {},
//   {}
// ]

for (let i = 1; i < 6; i++) {
  for (const div of document.querySelectorAll(`.r${i}`)) {
    // i is row number
    const divClasses = div.className.split(' ')
    // console.log(divClasses)

    // j is column number
    const colClass = divClasses.find(c => c.startsWith('c'))
    const j = colClass[1]
    // console.log(j)

    // cells[i - 1][j.toString() + '00'] = div

    
    // THIS SECTION IS FOR qs_original IMPORT
    // div.addEventListener('click', () => {
    //   // alert(`Category ${j}, Worth $${i + '00'}`)
    //   const colOffset = (j - 1) * 10
    //   const roundOffset = (parseInt(round) - 1) * 5
    //   const rowOffset = i - 1

    //   const offset = colOffset + roundOffset + rowOffset
    //   console.log(`${colOffset} + ${roundOffset} + ${rowOffset}`)
    //   console.log(qs[offset])
    // })


    // THIS SECTION IS FOR qs_organized IMPORT
    div.addEventListener('click', () => {
      const qObj = qs[j - 1][parseInt(round) - 1][i.toString() + '00']
      console.log(qObj)
    })
  }
}
