import React from 'react';
import { useKeyboardLayout } from '../hooks/useKeyboardLayout';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useStyles } from './KeyboardLayout.styles';

export const KeyboardLayout = () => {
  const keyboardLayout = useKeyboardLayout();
  const { primaryKeymap } = useKeyboardLayouts();
  const styles = useStyles();

  return (
    <div>
      {keyboardLayout.map(row => (
        <div className={styles.row}>
          {row.map(keyCode => (
            <div className={styles.letter}>{primaryKeymap[keyCode]}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
