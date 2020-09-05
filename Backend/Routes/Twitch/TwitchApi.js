"use strict";
const express = require("express");
let router = express.Router();
const { TwitchGetFollowing, TwitchGetFollowersData, TwitchGetLiveStreams, TwitchGetGameTitles }= require("../../Middleware/Twitch/TwitchAxiosAPI")

router.use(TwitchGetFollowing)
router.use(TwitchGetFollowersData)
router.get('/',(req, res) => {
    res.send(res.locals.profilesList)
    res.end()
})
router.use(TwitchGetLiveStreams)
router.get('/streams', (req, res)=> {
    res.send(res.locals.liveStreams)
    res.end()
})
router.use(TwitchGetGameTitles)
router.get('/games', (req, res)=> {
    res.send(res.locals.gamesStreams)
    res.end()
})




module.exports = router;