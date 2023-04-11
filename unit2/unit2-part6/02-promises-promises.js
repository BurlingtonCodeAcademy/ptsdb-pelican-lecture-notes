
// WHAT IS A PROMISE

// A promise is a box.
// The box can hold some value, but it might not hold it *yet*.

async function getIrsPage () {
  const irspage = await fetch('https://irs.gov')
  const body = irspage.text()
  console.log(body)

  // setTimeout(() => console.log(irspage), 1000)
}

getIrsPage()