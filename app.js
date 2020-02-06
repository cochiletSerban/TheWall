const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

app.get('/', (req, res) => res.send('server is up'))
