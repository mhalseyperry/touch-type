import React from 'react';
import { useThemeController } from '../contexts/ThemeContext';

export const ThemePicker = () => {
  const { isLightTheme, setIsLightTheme } = useThemeController();

  return (
    <div>
      <input
        name="theme"
        type="checkbox"
        onChange={e => setIsLightTheme(!isLightTheme)}
      ></input>
      <label for="theme">Dark Mode/Light Mode</label>
    </div>
  );
};
