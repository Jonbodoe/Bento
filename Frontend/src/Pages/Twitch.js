import React, { useContext } from 'react';
// import Navigation from '../Components/Navigation';
import AppContext from '../Data/State/AppContext';
// import UserProfiles from '../Components/Twitch/UserProfiles';
import GetUsers from '../Data/ApiRequests/GetUsers';
// import GetUsers from '../Data/ApiRequests/GetUsers';
// import GetUsers from '../Data/ApiRequests/GetUsers';

const Twitch = () => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    const classMode = mode.state
    return (
        <>
            <div className={`bg-${classMode.BgPrimaryClass}`}>
                <div className="container p-3">
                    <input className={`form-control bg-${classMode.BgPrimaryClass} text-${classMode.TextPrimaryClass}`} type="text" placeholder="Search"/>     
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <GetUsers/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Twitch