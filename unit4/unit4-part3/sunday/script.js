

const BASEURL = 'http://www.omdbapi.com/?apikey=2e88572b&'

async function getMovie(name) {
  const response = await fetch(`${BASEURL}t=${encodeURIComponent(name)}`)
  return await response.json()
}

// getMovie('Primer')

const input = document.getElementById('input-title')
const button = document.getElementById('fetch-button')
const h2 = document.getElementById('movie-title')
const pYear = document.getElementById('movie-year')
const pDir = document.getElementById('movie-director')

button.addEventListener('click', async (e) => {
  const searchTerm = input.value
  const result = await getMovie(searchTerm)

  h2.innerText = result.Title
  pYear.innerText = result.Year
  pDir.innerText = result.Director
})