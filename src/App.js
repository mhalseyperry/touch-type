import React, { useState, useEffect } from 'react';
import './App.css';
import { Drawer } from './components/Drawer';
import { KeymapPicker } from './components/KeymapPicker';
import { useThemes } from './contexts/ThemeContext';
import { LetterMode } from './components/LetterMode';

function App() {
  const { theme } = useThemes();
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
    <div className={`wrapper ${className}`} style={{ background: theme.bg }}>
      <Drawer />
      <KeymapPicker />
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
