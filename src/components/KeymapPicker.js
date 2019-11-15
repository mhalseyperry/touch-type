import React from 'react';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';

export const KeymapPicker = () => {
  const {
    keymaps,
    primaryKeymapKey,
    setPrimaryKeymap,
    secondaryKeymapKey,
    setSecondaryKeymap,
  } = useKeyboardLayouts();

  return (
    <>
      <select
        value={primaryKeymapKey}
        onChange={e => setPrimaryKeymap(e.target.value)}
      >
        {Object.keys(keymaps).map(keymap => (
          <option value={keymap}>{keymap}</option>
        ))}
      </select>
      <select
        value={secondaryKeymapKey}
        onChange={e => setSecondaryKeymap(e.target.value)}
      >
        {Object.keys(keymaps).map(keymap => (
          <option value={keymap}>{keymap}</option>
        ))}
      </select>
    </>
  );
};
