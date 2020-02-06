const express = require('express')
const axios = require('axios')
const cors = require('cors')
const qs = require('querystring')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

let token = null
const refreshToken = process.env.refreshToken

// more work to be done on this
function getAlbum (albumId, tackNo) {
  return {
    context_uri: 'spotify:album:57ZDcXMS2GTeAy8OSxAs0F',
    offset: {
      position: 0
    }
  }
}

const refreshTokenReqBody = {
  grant_type: 'refresh_token',
  refresh_token: refreshToken
}

const auth = {
  username: process.env.clientId,
  password: process.env.clientSecret
}

const refreshConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth
}

app.get('/', async (req, res) => {
  await axios.put('https://api.spotify.com/v1/me/player/play', getAlbum(), {
    headers: { Authorization: `Bearer ${token}` }
  })
  res.send('GGWP')
})

axios.interceptors.response.use((response) =>
  response,
error => {
  const originalRequest = error.config
  if (error.response.status === 401 && !originalRequest._retry) {
    console.log('INTERCEPTED')
    originalRequest._retry = true
    return axios.post('https://accounts.spotify.com/api/token', qs.stringify(refreshTokenReqBody), refreshConfig)
      .then(res => {
        if (res.status === 200) {
          token = res.data.access_token
          originalRequest.headers.Authorization = 'Bearer ' + token
          return axios(originalRequest)
        }
      })
  }
  return Promise.reject(error)
})
