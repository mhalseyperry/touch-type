import React, { useState } from 'react';
import './Drawer.css';

export function Drawer() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <div className={`drawer ${open ? 'open' : ''}`}>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
      <button onClick={handleClick}>yeet</button>
    </>
  );
}
