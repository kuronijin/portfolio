import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import store from 'store';
import { DefaultTheme } from 'styled-components';

import { ThemeMode } from 'types';

import { lightTheme, darkTheme } from './themes';

const useTheme = (): DefaultTheme => {
  const [themeMode, setThemeMode] = useState<ThemeMode | null>(null);

  useEffect(
    () => {
      store.on('@changed', (state) => {
        setThemeMode(state.theme.mode);
      });
    },
    [],
  );

  useLayoutEffect(
    () => {
      const state = store.get();
      setThemeMode(state.theme.mode);
    },
    [],
  );

  return themeMode === ThemeMode.Light
    ? lightTheme
    : darkTheme;
};

export default useTheme;
