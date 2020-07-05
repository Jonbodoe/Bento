import React, { useReducer } from "react";
import AppContext from "./AppContext"
import ThemeReducer from "../Reducers/themeReducer";
const Store = props => {
    const [mode, setMode] = useReducer(ThemeReducer, {
        themeMode: 'light',
        BgPrimaryClass: 'light',
        BgSecondaryClass: 'white',
        TextPrimaryClass: 'dark',
        TextSecondaryClass: 'secondary'
    })
    const StoreList = {
        themeMode: {
            state: mode,
            dispatch: setMode
        },
    }
    return (
        <AppContext.Provider value={StoreList}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store