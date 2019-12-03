import React, { useState, useEffect } from 'react';
import { Drawer } from './components/Drawer';
import { KeymapPicker } from './components/KeymapPicker';
import { LetterMode } from './components/LetterMode';
import { ThemePicker } from './components/ThemePicker';
import { AppStyles } from './hooks/App.styles';

function App() {
  const classes = AppStyles();
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
