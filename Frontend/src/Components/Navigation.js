import React, {useContext} from 'react';
import AppContext from '../Data/State/AppContext';

const Navigation = (props) => {
    const stateContext = useContext(AppContext);
    const mode = stateContext.themeMode;
    console.log(mode.state)
    const toggleLogo = (state) => {
        switch(state.themeMode) {
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
                <div className="align-self-center">
                </div>
                <div className="d-flex">
                    <div className="text-left px-3">
                        <h2 className="font-weight-bold navbar-brand no-text-margin">Bento</h2>
                        <h4 className={`text-${props.title.toLowerCase()}`}>{props.title}</h4>
                    </div>
                    <div className="px-2 border-left border-secondary align-self-center">
                        <button type="button" className={`btn btn-${mode.state.themeMode}`} onClick={()=> mode.dispatch({type: mode.state.themeMode})}>
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