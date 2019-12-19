import React, { useState } from 'react';
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

  return (
    <div className={styles.keyboard}>
      {keyboardLayout.map(row => (
        <div className={styles.row} key={row}>
          {row.map(keyCode => (
            <div
              className={`${styles.letter} ${
                keyCode === keyDown
                  ? keyCode === currentKey
                    ? styles.correct
                    : styles.incorrect
                  : ''
              }`}
              key={keyCode}
            >
              {primaryKeymap[keyCode]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
