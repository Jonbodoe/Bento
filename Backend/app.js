const express = require('express')
require('dotenv').config()

// const request = require('request')
// const fetch = require('node-fetch');
const cors = require("cors");
const app = express()
// const async  = require('express-async-await')
const port = process.env.PORT || 5000

// app.use(express.urlencoded());
// app.use(express.json())
app.use(cors());


app.get('/#/',function (req, res) {
    res.send('Widgets')
})


app.get('/Twitter',function (req, res) {
  res.send('Twitter')
})

app.get('/Twitch',function (req, res) {
  res.send('Twitch')

})

app.get('/Youtube',function (req, res) {
  res.send('Youtube')
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
