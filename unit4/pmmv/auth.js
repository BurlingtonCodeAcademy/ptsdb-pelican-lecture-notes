
import * as dotenv from 'dotenv'
dotenv.config()

const BASEURL = 'https://accounts.spotify.com/api/token'
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

async function getAccessToken() {
  const response = await fetch(BASEURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' 
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  })
  const jsonData = await response.json()
  return jsonData
}

const atJson = await getAccessToken()
const token = atJson.access_token
export default token

export const three = 3


