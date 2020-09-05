import React, { useContext } from 'react';
// import Navigation from '../Components/Navigation';
import AppContext from '../Data/State/AppContext';
// import UserProfiles from '../Components/Twitch/UserProfiles';
import GetUsers from '../Data/ApiRequests/GetUsers';
import Navigation from '../Components/Navigation';
import GetLiveStreams from '../Data/ApiRequests/GetLiveStreams';
// import GetUsers from '../Data/ApiRequests/GetUsers';
// import GetUsers from '../Data/ApiRequests/GetUsers';

const Twitch = () => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    const classMode = mode.state
    return (
        <>
            <div className={`container-fluid bg-${classMode.BgPrimaryClass}`}>
                <div className="row">
                    <div className="col-sm-2 no-container-space bg-twitch">
                        <div className="d-flex p-3">
                            <div className="text-light">
                                <i className="fa fa-chevron-left"></i>
                            </div>
                            <div className="d-flex px-2 text-center">
                                <i className="fa fa-twitch fa-2x px-2 text-white"></i>
                                <h4 className={`no-text-margin font-weight-bold text-white`}>Twitch</h4>
                            </div>
                        </div>
                        {/* <div className={`bg-${classMode.BgSecondaryClass}`}> */}
                        {/* </div> */}
                    </div>
                    <div className="col-sm-10 no-container-space">
                        <Navigation title="Twitch"/>
                        <div className="px-4 py-3">
                            <h5 className="no-text-margin text-twitch py-1">Following</h5>
                            <div className="overflow">
                                <GetUsers/>
                            </div>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="no-text-margin text-twitch py-1">Live Streams</h5>
                            <div className="overflow">
                                <GetLiveStreams/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Twitch

