import Axios from "axios";
import React, { useEffect, useState } from 'react';

const GetGames = () => {
    const [dataList, setDataList] = useState([])
    const [errorMessage, setError] = useState()
    const [loader, setLoader] = useState(false)

    // const condenseTitle = async (string) => {
    //     const newString = await string.length
    //     return 
    // }
    useEffect(() => {
        const source = Axios.CancelToken.source();
        const getData = async () => {
            await Axios({
                method: "GET",
                url: "http://localhost:4000/Twitch/games" || `${process.env.PORT}/Twitch`,
                headers: {
                    "Content-Type": "application/json"
                }

                // https://stackoverflow.com/questions/53163539/how-to-create-api-utils-reusable-in-reactjs

            }).then(res => {
                setLoader(true)
                const newArray = res.data[0].filter(item => item = Boolean(item))
                // console.log(newArray)
                setDataList(newArray)
            }).catch(function (err) {
                setError(err.message, err.request)
                console.log(err.message)
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
                <div className="text-center">
                    {
                        !errorMessage ?
                            <>
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="text-secondary">Loading Live Streams</div>
                            </>
                            :
                            <div className="text-secondary">{errorMessage}</div>
                    }
                </div>
                {/* </div> */}
            </>
            :
            <div className="d-flex justify-content-between">

                {dataList.map((stream) => {
                    const streamURL = stream.thumbnail_url ? stream.thumbnail_url.replace("-{width}x{height}", "") : false
                    // console.log(condenseTitle(stream.title))
                    return (
                        <>
                            <div className="stream-item m-2">
                                <img className={`img-fluid soft-corners`} src={streamURL} />     
                                <div>
                                    <p className={`med-text font-weight-bold`}>{stream.title.length > 35 ? stream.title.substring(0, 35) + "..." : stream.title}</p>
                                    {/* https://www.w3schools.com/jsref/jsref_slice_string.asp for breaking strings w/ ... */}
                                    <p className={`small-text font-weight-bold`}>{stream.user_name}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
    )
}


export default GetGames