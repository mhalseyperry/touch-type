import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'theming';

export const ThemeControllerContext = createContext();

export const useThemeController = () => useContext(ThemeControllerContext);

export const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const light = {
    text: '#555',
    ui: '#ddd',
    bg: '#eee',
  };

  const dark = {
    text: '#ddd',
    ui: '#333',
    bg: '#555',
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
