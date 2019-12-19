import React, { useState, useEffect } from 'react';
import { Drawer } from './components/Drawer';
import { LetterMode } from './components/LetterMode';
import { ThemePicker } from './components/ThemePicker';
import { AppStyles } from './hooks/App.styles';
import { KeyboardLayout } from './components/KeyboardLayout';

function App() {
  const styles = AppStyles();
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
    <div className={`${styles.wrapper} ${className ? styles[className] : ''}`}>
      <header className={styles.header}>
        <Drawer />
      </header>
      <main className={styles.main}>
        <LetterMode
          onSuccesfulGuess={() => setClassName('correct')}
          onIncorrectGuess={() => setClassName('incorrect')}
        />
      </main>
    </div>
  );
}

export default App;
