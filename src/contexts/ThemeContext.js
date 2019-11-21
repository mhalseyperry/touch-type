import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useThemes = () => useContext(ThemeContext);

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

  const theme = isLightTheme ? light : dark;

  const value = {
    theme,
    isLightTheme,
    setIsLightTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
