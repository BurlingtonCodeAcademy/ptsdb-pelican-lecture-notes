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
  // i is row number
  const rowClass = `.r${i}`  // for each run through loop: .r1, .r2, etc.

  for (const div of document.querySelectorAll(rowClass)) {
    // div
    const divClasses = div.className.split(' ')
    // console.log(divClasses)

    // for each run through inner loop: c1, c2, etc.
    const colClass = divClasses.find(c => c.startsWith('c'))
    // example: colClass is 'c2'
    
    // j is column number
    const j = colClass[1]
    // example: j is '2'
    

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
      // todo: add comment
      const qObj = qs[parseInt(j) - 1][parseInt(round) - 1][i.toString() + '00']
      console.log(qObj)
    })
  }
}
