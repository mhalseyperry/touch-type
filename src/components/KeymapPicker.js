import React from 'react';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';

export const KeymapPicker = () => {
  const { keymaps, primaryKeymapKey, setPrimaryKeymap } = useKeyboardLayouts();

  return (
    <>
      <select
        value={primaryKeymapKey}
        onChange={e => setPrimaryKeymap(e.target.value)}
      >
        {Object.keys(keymaps).map(keymap => (
          <option key={keymap} value={keymap}>
            {keymap}
          </option>
        ))}
      </select>
    </>
  );
};
