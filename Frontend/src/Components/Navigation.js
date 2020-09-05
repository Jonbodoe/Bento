import React, { useContext } from 'react';
import AppContext from '../Data/State/AppContext';

const Navigation = (props) => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    const classMode = mode.state
    console.log(mode.state)
    const toggleLogo = (state) => {
        switch (state.themeMode) {
            case 'light':
                return <i className="fas fa-moon fa-2x"></i>
            case 'dark':
                return <i className="fas fa-sun fa-2x"></i>
            default:
                return <i className="fas fa-moon fa-2x"></i>
        }

    }
    return (
        // <div className={themeMode.state? 'e' : 'lightmode'}>
        <nav className={`navbar navbar-expand-lg py-1 text-right shadow-sm px-5 container-fluid d-flex justify-content-between navbar-${mode.state.themeMode} bg-${mode.state.themeMode} border-bottom border-${mode.state.BgSecondaryClass}`}>
            <div className="d-flex align-items-center">
                <div className="">
                    <input className={`form-control bg-${classMode.BgPrimaryClass} text-${classMode.TextPrimaryClass}`} type="text" placeholder="Search" />
                </div>
                {/* <div className="text-secondary">
                        <i class="fa fa-chevron-left"></i>
                    </div>
                    <div className="d-flex px-2">
                        <i className="fa fa-twitch fa-2x px-2 text-twitch"></i>
                        <h4 className={`no-text-margin font-weight-bold text-twitch`}>{props.title}</h4>
                    </div> */}
            </div>
            <div className="d-flex">
                <div className="text-left px-3">
                    <h2 className="font-weight-bold navbar-brand no-text-margin">Bento</h2>
                </div>
                <div className="px-2 border-left border-secondary align-self-center">
                    <button type="button" className={`btn btn-${mode.state.themeMode}`} onClick={() => mode.dispatch({ type: mode.state.themeMode })}>
                        {
                            toggleLogo(mode.state)
                            // <i className="fas fa-moon fa-2x"></i>
                        }
                    </button>
                </div>
            </div>
        </nav>
        // </div>
    )
}
export default Navigation