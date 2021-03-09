import React from 'react';

export const theme = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = React.createContext(theme.light);

// import React, { useState } from 'react';

// const themeContext = () => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(() => (theme === 'light' ? 'dark' : 'light'));
//   };
// };
// const ThemeContext = React.createContext(themeContext, themeContext.toggleTheme);
// export default ThemeContext;
