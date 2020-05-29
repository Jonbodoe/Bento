import React from 'react';
import Twitch from '../Pages/Twitch';
import Youtube from '../Pages/Youtube';
import Twitter from '../Pages/Twitter';


const WidgetData = [
    {
        title: "Twitch",
        icon: "fa-twitch twitch ",
        link: "/twitch",
        JSX: <Twitch/>,
        hover: "bg-twitch",
    },
    {
        title: "Youtube",
        icon: "fa-youtube youtube ",
        link: "/youtube",
        JSX: <Youtube/>,
        hover: "bg-youtube",
    },
    {
        title: "Twitter",
        icon: "fa-twitter twitter ",
        link: "/twitter",
        JSX: <Twitter/>,
        hover: "bg-twitter",
    },
]
export default WidgetData