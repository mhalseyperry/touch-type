import React, { useState } from 'react';
import './Drawer.css';
import { KeymapPicker } from './KeymapPicker';
import { useStyles } from './Drawer.styles';
import { ThemePicker } from './ThemePicker';

export function Drawer() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <div className={`${styles.drawer} ${open ? styles.open : ''}`}>
        <ThemePicker />
        <KeymapPicker />
      </div>
      <button className={styles.button} onClick={handleClick}>
        <img src="./icons8-settings-50.png" alt=""></img>
      </button>
    </>
  );
}
