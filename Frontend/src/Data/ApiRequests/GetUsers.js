import Axios from "axios";
import React from 'react';

const GetUsers = () => {
    Axios({
        method: "GET",
        url: "http://localhost:4000/Twitch" ||`${process.env.PORT}/Twitch`,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        console.log(res);
      }).catch(function(err) {
        console.log(err.response)
      });
    return (<><div>hello</div></>)
 }
 export default GetUsers