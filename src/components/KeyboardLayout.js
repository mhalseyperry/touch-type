import React, { useState, useEffect } from 'react';
import { useKeyboardLayout } from '../hooks/useKeyboardLayout';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useStyles } from './KeyboardLayout.styles';
import { useEventListener } from '../hooks/useEventListener';

export const KeyboardLayout = () => {
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

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (keyDown) {
        setKeyDown('');
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [keyDown]);

  return (
    <div>
      {keyboardLayout.map(row => (
        <div className={styles.row}>
          {row.map(keyCode => (
            <div
              className={`${styles.letter} ${
                keyCode === keyDown ? styles.on : ''
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
