"use strict";
const express = require("express");
let router = express.Router();
const { TwitchGetFollowing, TwitchGetFollowersData }= require("../../Middleware/Twitch/TwitchAxiosAPI")

router.use(TwitchGetFollowing)
router.use(TwitchGetFollowersData)
router.get('/',(req, res) => {
    res.send(res.locals.profilesList)
    res.end()
})


module.exports = router;