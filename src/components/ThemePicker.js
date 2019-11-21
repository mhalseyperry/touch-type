import React from 'react';
import { useThemes } from '../contexts/ThemeContext';

export const ThemePicker = () => {
  const { isLightTheme, setIsLightTheme } = useThemes();

  return (
    <div>
      <select onChange={e => setIsLightTheme(e.target.value)}>
        <option value={false}>Dark Mode</option>
        <option value={true}>Light Mode</option>
      </select>
    </div>
  );
};
