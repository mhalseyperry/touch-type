import React from 'react';
import { useThemeController } from '../contexts/ThemeContext';
import { ToggleButton } from './ToggleButton';

export const ThemePicker = () => {
  const { isLightTheme, setIsLightTheme } = useThemeController();

  return (
    <div>
      <p>Theme Picker: </p>
      <ToggleButton on={isLightTheme} toggle={setIsLightTheme} />
    </div>
  );
};
