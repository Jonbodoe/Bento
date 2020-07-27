import React, {useContext} from 'react';
import AppContext from '../../Data/State/AppContext';

// import GetUsers from '../../Data/ApiRequests/GetUsers';

const UserProfiles = (props) => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    const profile = props.data
    return (
        <div className="p-4">
            <div className="py-1 text-center">
            <p className={`font-weight-bold no-text-margin text-`+mode.state.TextPrimaryClass}>{profile.display_name}</p>
            </div>
            <div className="">
                <img className="img-fluid" src={profile.profile_image_url}/>
            </div>
        </div>
    )
}

export default UserProfiles