import { useEffect, useState } from 'react';
import store from 'store';
import { DefaultTheme } from 'styled-components';

import { ThemeMode } from 'types';

const lightTheme: DefaultTheme = {
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
};

const darkTheme: DefaultTheme = {
  palette: {
    common: {
      white: '#000000',
      black: '#FFFFFF',
    },
  },
};

const useTheme = (): DefaultTheme => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const state = store.get();
    // console.log(`This is ---> state.theme.mode`, state.theme.mode);
    return state.theme.mode;
  });
  // console.log(`This is ---> themeMode`, themeMode);

  useEffect(
    () => {
      store.on('@changed', (state) => {
        setThemeMode(state.theme.mode);
      });
    },
    [],
  );

  // const toggleThemeMode = useCallback(
  //   () => {
  //     setThemeMode(
  //       themeMode === ThemeMode.Light
  //         ? ThemeMode.Dark
  //         : ThemeMode.Light,
  //     );
  //   },
  //   [themeMode],
  // );

  // console.log(`This is ---> themeMode`, themeMode);
  return themeMode === ThemeMode.Light
    ? lightTheme
    : darkTheme;

  // return {
  //   theme: themeMode === ThemeMode.Light
  //     ? lightTheme
  //     : darkTheme,
  //   toggleThemeMode,
  // };
};

export default useTheme;
