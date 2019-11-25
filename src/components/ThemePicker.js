import React from 'react';
import { useThemeController } from '../contexts/ThemeContext';

export const ThemePicker = () => {
  const { isLightTheme, setIsLightTheme } = useThemeController();

  return (
    <div>
      <select onChange={e => setIsLightTheme(e.target.value)}>
        <option value={false}>Dark Mode</option>
        <option value={true}>Light Mode</option>
      </select>
    </div>
  );
};
