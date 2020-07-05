import React, { useContext } from 'react';
// import Navigation from '../Components/Navigation';
import AppContext from '../Data/State/AppContext';
import GetUsers from '../Data/ApiRequests/GetUsers';

const Twitch = () => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    const classMode = mode.state
    console.log(classMode)
    // console.log(mode.state, 'twtich')
    return (
        <>
            <div className={`bg-${classMode.BgPrimaryClass}`}>
                <div className="container p-3">
                    <input className={`form-control bg-${classMode.BgPrimaryClass} text-${classMode.TextPrimaryClass}`} type="text" placeholder="Search"/>     
                </div>
                <div className="container-fluid">
                    <GetUsers/>
                </div>
            </div>
        </>
    )
}

export default Twitch