const express = require("express");
const app = express()
const axios = require("axios");

function TwitchGetFollowing(req, res, next) {
  axios.get('https://api.twitch.tv/helix/users/follows?first=100&from_id=135849800', {
    headers: {
      "client-id": process.env.Client_ID,
      Authorization: `Bearer ${process.env.Access_Token}`
    },
    qs: {
      id: 135849800
    }
  }).then(function (response) {
    res.locals.data = response.data.data
    next()
  }).catch(function (err) {
    res.locals.error = {
      error: err,
      statusCode: res.status(500)
    }
  })
}


async function TwitchGetFollowersData (req, res, next) {
  res.locals.profilesList = []
  const FollowersList = res.locals.data
  const GetFollowersData = Promise.all(FollowersList.map((FollowersData) => {
    // Promise.all to handle multiple requests & mapping out the FollowersList from the initial API request
    return axios.get(`https://api.twitch.tv/helix/users?id=${FollowersData.to_id}`, {
      // axios is async request
      headers: {
        "client-id": process.env.Client_ID,
        Authorization: `Bearer ${process.env.Access_Token}`
      },
      qs: {
        id: 135849800
      }
    }).then(function (response) {
      return response.data.data[0]
    })
      .catch(function (err) {
        res.locals.error = {
          error: err,
          statusCode: res.status(500)
        }
      })
  }))
  res.locals.profilesList.push(await GetFollowersData)
  next()

}
module.exports = { TwitchGetFollowing, TwitchGetFollowersData }
// export default Hello