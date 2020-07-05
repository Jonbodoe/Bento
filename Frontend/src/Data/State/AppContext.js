// import { useReducer } from 'react';
import React from 'react';
const AppContext = React.createContext();
export default AppContext;


// const reducer = ( state, action ) => {
//     switch (action.type) {
//         case true:
//             return console.log('hello world', state)
//         default:
//             return console.log('naw bro', state)
//     } 
// }

// const [globalState, dispatch] = useReducer(reducer, {state: 'hell yea'});

// dispatch({ type: true})

// console.log('after', globalState)