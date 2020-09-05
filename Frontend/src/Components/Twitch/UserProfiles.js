import React, {useContext} from 'react';
import AppContext from '../../Data/State/AppContext';

// import GetUsers from '../../Data/ApiRequests/GetUsers';

const UserProfiles = (props) => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    const profile = props.data
    return (
        <div className="p-2 m-1 profile-item">
            <div className="">
                <img className="img-fluid" src={profile.profile_image_url}/>
            </div>
            <div className="py-1">
            <p className={`small-text font-weight-bold no-text-margin text-center text-`+mode.state.TextPrimaryClass}>{profile.display_name}</p>
            </div>
        </div>
    )
}

export default UserProfiles