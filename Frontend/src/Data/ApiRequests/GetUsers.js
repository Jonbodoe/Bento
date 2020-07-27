import Axios from "axios";
import React, { useEffect, useState } from 'react';
import UserProfiles from "../../Components/Twitch/UserProfiles";

const GetUsers = () => {
  const [dataList, setDataList] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:4000/Twitch" || `${process.env.PORT}/Twitch`,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setDataList(...dataList, res.data[0])
      setLoader(!loader ? loader : !loader)
      // Look at https://github.com/Jonbodoe/WeatherApp/blob/master/Frontend/src/Components/Navigation.js 
      // Properly set up loader state 
    }).catch(function (err) {
      console.log(err)
    });
  }, [])
  // setLoader(!loader)
  // console.log(dataList)
  return (
    !loader ? 
    dataList.map((profile) =>

    // console.log(profile)
      <React.Fragment key={profile.id}>
        <UserProfiles data={profile} />
      </React.Fragment>
    )
    :
    <div>Loading...</div>
  )
}
export default GetUsers