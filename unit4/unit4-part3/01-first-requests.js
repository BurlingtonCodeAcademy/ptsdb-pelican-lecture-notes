
const URL1 = 'https://google.com'



async function getWebpage(url) {
  const response = await fetch(url)
  return response
}

