"use strict";
const express = require("express");
let router = express.Router();
const TwitchGetFollowing = require("../../Middleware/Twitch/TwitchAxiosAPI")
// router.use(Hello)

router.use(TwitchGetFollowing)
router.get('/', (req, res, next ) => {
    res.send(res.locals.data)
    // axios.get('https://api.twitch.tv/helix/users/follows?first=100&from_id=135849800', {
    //   headers: {
    //     "client-id": process.env.Client_ID,
    //     Authorization: `Bearer ${process.env.Access_Token}`
    //   },
    //   qs: { id: 135849800
    //   } 
    // }).then(function (response) {
    //     res.locals.data = response.data.data
    //     res.send(res.locals.data)
    //     next()
    // }).catch(function(err) {
    //     res.locals.error = {
    //         error: err,
    //         statusCode: res.status(500)
    //     }
    // })
})


module.exports = router;