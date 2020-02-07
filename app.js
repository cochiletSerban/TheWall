const express = require('express')
const axios = require('axios')
const cors = require('cors')
const qs = require('querystring')
require('dotenv').config()

const getAuthHeaders = require('./helpers/headers/headersConstants').getAuthHeaders
const getRecord = require('./helpers/record/recordMethods').getRecord
const refreshTokenReqBody = require('./helpers/headers/headersConstants').refreshTokenReqBody
const refreshConfig = require('./helpers/headers/headersConstants').refreshConfig

// App config constants
const app = express()
const port = process.env.port || 4000

// work id: 54bd205b81dd216d79b3c8b4684602eff7fcfbd9
// home id: 828b6067e402df9a0467d98c04d11498fc11b65e
const PlayerApi = 'https://api.spotify.com/v1/me/player/play?device_id=54bd205b81dd216d79b3c8b4684602eff7fcfbd9'
const TokenApi = 'https://accounts.spotify.com/api/token'

let token = null

// App config
app.use(cors())
app.use(express.json())
app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

async function handleInterceptError (error) {
  const originalRequest = error.config
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true
    const res = await axios.post(TokenApi, qs.stringify(refreshTokenReqBody), refreshConfig)
    if (res.status === 200) {
      token = res.data.access_token
      originalRequest.headers.Authorization = 'Bearer ' + token
      return axios(originalRequest)
    }
  }
  // TODO
  // if 404 start spotify on laptop via shell cmd or something then retry request
  return Promise.reject(error)
}

axios.interceptors.response.use(
  response => response,
  async error => handleInterceptError(error)
)

// app endpoints
app.get('/:recordNo', async (req, res) => {
  try {
    const recordNo = req.params.recordNo
    await axios.put(PlayerApi, getRecord(recordNo), getAuthHeaders(token))
    res.send('GGWP')
  } catch (err) {
    res.send(err)
  }
})
