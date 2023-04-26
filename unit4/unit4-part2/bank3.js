const launderButton = document.getElementById('launder')
launderButton.addEventListener('click',() => console.log('clicking laundering button'))
                            //arg 1         //arg 2 (everything after comma)
launderButton.addEventListener('click', launderMoney)

const addTransSubmit = document.getElementById('addTransSubmit')
addTransSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  addSpecifiedTransaction()
})



function launderMoney () {
  // either here or at the end of the line, comment what's going on
  addTransaction('2023-04-26', 'fuhgeddabout it', '$10,000')
}


function addSpecifiedTransaction() {
  const dateEl = document.getElementById('addTransDate')
  const descEl = document.getElementById('addTransDesc')
  const amountEl = document.getElementById('addTransAmt')
  
  addTransaction(dateEl.value, descEl.value, amountEl.value)

  dateEl.value = ''
  descEl.value = ''
  amountEl.value = ''
}








function addTransaction (transDate, transDescription, transAmount) {
  const date = document.createElement('td')
  const description = document.createElement('td')
  const amount = document.createElement('td')

  date.innerText = transDate
  description.innerText = transDescription
  amount.innerText = transAmount

  const row = document.createElement('tr')
  row.appendChild(date)
  row.appendChild(description)
  row.appendChild(amount)

  const tbody = document.getElementsByTagName('tbody')[0]
  // insert where now?
  tbody.insertBefore(row, tbody.children[0])
}