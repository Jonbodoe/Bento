// import React from 'react';

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'light':
          return {
            themeMode: 'dark',
            BgPrimaryClass: 'dark',
            BgSecondaryClass: 'secondary',
            TextPrimaryClass: 'light',
            TextSecondaryClass: 'white'
          };
        case 'dark':
          return {
            themeMode: 'light',
            BgPrimaryClass: 'light',
            BgSecondaryClass: 'white',
            TextPrimaryClass: 'dark',
            TextSecondaryClass: 'secondary'
          };
        default:
          throw new Error();
      }
}

export default ThemeReducer;

