
const newP = document.createElement('p')
newP.innerText = 'here is a new paragraph'
document.body.appendChild(newP)


// section: ADDING FOOTER
const footer = document.createElement('footer')

const footerP = document.createElement('p')
footer.appendChild(footerP)
footerP.innerText = '©2023 Eel Industries, Ltd.'

document.body.appendChild(footer)


const colors = ['red', 'blue', 'purple', 'yellow']
let i = 0

const ccButton = document.getElementById('background-color-change')
ccButton.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[i % 4]
  i += 1
  console.log(i)
})
