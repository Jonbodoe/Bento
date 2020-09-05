import Axios from "axios";
import React, { useEffect, useState } from 'react';
import UserProfiles from "../../Components/Twitch/UserProfiles";

const GetUsers = () => {
  const [dataList, setDataList] = useState([])
  const [errorMessage, setError] = useState()
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const source = Axios.CancelToken.source();
    const getData = async () => {
      await Axios({
        method: "GET",
        url: "http://localhost:4000/Twitch" || `${process.env.PORT}/Twitch`,
        headers: {
          "Content-Type": "application/json"
        }

        // https://stackoverflow.com/questions/53163539/how-to-create-api-utils-reusable-in-reactjs

      }).then(res => {
        setLoader(true)
        setDataList(res.data[0])
      }).catch(function (err) {
        setError(err.message)
      });
      return () => {
        setLoader(false)
        source.cancel()
      }
    }
    getData()
  }, [])

  return (
    !loader && !dataList.length ?
      <>
      {/* <div className="overflow"> */}
        <div className="text-center overflow">
          {
            !errorMessage ?
              <>
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="text-secondary">Loading Following</div>
              </>
              :
              <div className="text-secondary">{errorMessage}</div>
          }
        </div>
        {/* </div> */}
      </>
      :
      <div className="d-flex justify-content-between">
        {dataList.map((profile) =>
          <UserProfiles data={profile} key={profile.id} />
        )}
      </div>
  )
}
export default GetUsers