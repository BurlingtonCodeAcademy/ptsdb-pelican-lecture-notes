

const addTransButton = document.getElementById('addTransSubmit')


addTransButton.addEventListener('click', (e) => {
  const date = document.getElementById('addTransDate').value
  const desc = document.getElementById('addTransDesc').value
  const amount = document.getElementById('addTransAmt').value

  const newRow = document.createElement('tr')
  
  const newDate = document.createElement('td')
  newDate.innerText = date
  newDate.insertBefore()



})


function addTrans(date, desc, amount) {

}