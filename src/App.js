import React, { useState, useEffect } from 'react';
import './App.css';
import { Drawer } from './components/Drawer';
import { KeymapPicker } from './components/KeymapPicker';
import { LetterMode } from './components/LetterMode';
import { ThemePicker } from './components/ThemePicker';
import { useTheme } from 'theming';
import { useStyles } from './hooks/useStyles';

function App() {
  const { theme } = useTheme();
  const classes = useStyles(theme);
  console.log(classes);
  const [className, setClassName] = useState('');

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (className) {
        setClassName('');
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [className]);

  return (
    <div className={classes.wrapper}>
      <Drawer />
      <KeymapPicker />
      <ThemePicker />
      <main>
        <LetterMode
          onSuccesfulGuess={() => setClassName('correct')}
          onIncorrectGuess={() => setClassName('incorrect')}
        />
      </main>
    </div>
  );
}

export default App;
