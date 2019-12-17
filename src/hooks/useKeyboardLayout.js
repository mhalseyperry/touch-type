import { useMemo } from 'react';

export const useKeyboardLayout = () =>
  useMemo(
    () => [
      [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
      [65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 192],
      [90, 88, 67, 86, 66, 78, 77, 188, 190],
    ],
    [],
  );
