import React, { useState, useEffect } from 'react';
import { useKeyboardLayout } from '../hooks/useKeyboardLayout';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useStyles } from './KeyboardLayout.styles';
import { useEventListener } from '../hooks/useEventListener';

export const KeyboardLayout = ({ currentKey }) => {
  const keyboardLayout = useKeyboardLayout();
  const { primaryKeymap } = useKeyboardLayouts();
  const styles = useStyles();
  const [keyDown, setKeyDown] = useState('');

  useEventListener(
    'keydown',
    e => {
      setKeyDown(e.keyCode);
    },
    [],
  );

  useEventListener(
    'keyup',
    () => {
      setKeyDown('');
    },
    [],
  );

  console.log({ keyDown, currentKey });
  return (
    <div>
      {keyboardLayout.map(row => (
        <div className={styles.row}>
          {row.map(keyCode => (
            <div
              className={`${styles.letter} ${
                keyCode === keyDown
                  ? keyCode === currentKey
                    ? styles.correct
                    : styles.incorrect
                  : ''
              }`}
            >
              {primaryKeymap[keyCode]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
