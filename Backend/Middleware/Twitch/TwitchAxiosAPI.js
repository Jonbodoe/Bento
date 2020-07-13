const express = require("express");
const app = express()
const axios = require("axios");
// const axios = require("axios");

function TwitchGetFollowing (req, res, next){
    axios.get('https://api.twitch.tv/helix/users/follows?first=100&from_id=135849800', {
      headers: {
        "client-id": process.env.Client_ID,
        Authorization: `Bearer ${process.env.Access_Token}`
      },
      qs: { id: 135849800
      } 
    }).then(function (response) {
        res.locals.data = response.data.data
        res.send(res.locals.data)
        next()
    }).catch(function(err) {
        res.locals.error = {
            error: err,
            statusCode: res.status(500)
        }
    })
}
// app.use(Hello)
module.exports = TwitchGetFollowing
// export default Hello