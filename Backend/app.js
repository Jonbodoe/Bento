const express = require('express')
require('dotenv').config()
const cors = require("cors");
const app = express()
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Widgets')
})

app.get('/Twitter', function (req, res) {
  res.send('Twitter')
})
app.use('/Twitch', require('./Routes/Twitch/TwitchApi'))
// Routes to Twitch APIs

app.get('/Youtube', function (req, res) {
  res.send('Youtube')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
