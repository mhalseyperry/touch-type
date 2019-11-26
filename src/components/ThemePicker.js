import React from 'react';
import { useThemeController } from '../contexts/ThemeContext';
import { ToggleButton } from './ToggleButton';

export const ThemePicker = () => {
  const { isLightTheme, setIsLightTheme } = useThemeController();

  return (
    <div>
      <ToggleButton on={isLightTheme} toggle={setIsLightTheme} />
    </div>
  );
};
