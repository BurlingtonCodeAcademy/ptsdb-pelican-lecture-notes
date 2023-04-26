const launderButton = document.getElementById('launder')
launderButton.addEventListener('click',() => console.log('clicking laundering button'))
                            //arg 1         //arg 2 (everything after comma)
launderButton.addEventListener('click', launderMoney)


function launderMoney () {
   const date = document.createElement('td')
   const description = document.createElement('td')
   const amount = document.createElement('td')
   date.innerText = '04/26/2023'
   description.innerText = 'fuhgeddabout it'
   amount.innerText = '10,000'
   const row = document.createElement('tr')
   row.appendChild(date)
   row.appendChild(description)
   row.appendChild(amount)
   const tbody = document.getElementsByTagName('tbody')[0]
   tbody.insertBefore(row, tbody.children[0])
}


