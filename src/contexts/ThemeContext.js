import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'theming';

export const ThemeControllerContext = createContext();

export const useThemeController = () => useContext(ThemeControllerContext);

export const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const light = {
    text: '#555',
    ui: '#fff',
    bg: '#eee',
    shadow: 'rgba(0, 0, 0, 0.30)',
  };

  const dark = {
    text: '#ddd',
    ui: '#555',
    bg: '#333',
    shadow: 'rgba(0, 0, 0, 0.30)',
  };

  const value = {
    isLightTheme,
    setIsLightTheme,
  };

  return (
    <ThemeControllerContext.Provider value={value}>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        {children}
      </ThemeProvider>
    </ThemeControllerContext.Provider>
  );
};
