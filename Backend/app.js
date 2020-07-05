const express = require('express')
require('dotenv').config()
// const request = require('request')
// const fetch = require('node-fetch');
const cors = require("cors");
const app = express()
const router = express.Router();
const axios = require("axios");
const port = process.env.PORT || 4000

const TWITCH_CLIENT_ID = process.env.Client_ID
const TWITCH_SECRET    = process.env.Client_Secret;
app.use(cors());

app.get('/', function (req, res) {
  res.send('Widgets')
})

app.get('/Twitter', function (req, res) {
  res.send('Twitter')
})

app.get('/Twitch', function (req, res) {
  // res.send('Twitch')
  // axios.get('https://api.twitch.tv/helix/users/follows?from_id=135849800', {
    axios.get('https://api.twitch.tv/helix/users/follows?first=100&from_id=135849800', {
    headers: {
      "client-id": process.env.Client_ID,
      Authorization: `Bearer ${process.env.Access_Token}`
    },
    qs: { id: 135849800
    } 
    
  }).then(function (response) {
    console.log(response.data)
    res.send(response.data)
  }).catch(function(err) {
    res.send(response)
    console.log(err.response.data)
  })
})
// curl -H "Authorization: OAuth 9l1x8eqk4qpdffik6tvcyqw16mzqgy" https://id.twitch.tv/oauth2/validate
app.get('/Youtube', function (req, res) {
  res.send('Youtube')
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
