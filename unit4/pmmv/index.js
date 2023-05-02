
import token from './auth.js'

const BASEURL = 'https://api.spotify.com/v1'

const artistID = '3TVXtAsR1Inumwj472S9r4?si=k-0y8nH9Txi0mtkJd-k40A'
const albumID = '3SpBlxme9WbeQdI9kx7KAV?si=mUgOUgFtTwq-RmzUby6FWg'

async function getArtistInfo(id) {
  const response = await fetch(`${BASEURL}/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const jsonData = await response.json()
  return jsonData
}

// const result = await getArtistInfo(artistID)




fetch(`${BASEURL}/albums/${albumID}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(jsonData => {
    // document.getElementById. etc
    console.log(jsonData)
  })

