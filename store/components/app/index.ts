import { StoreonModule } from 'storeon';

import { ThemeMode } from 'types';

interface ThemeState {
  mode: ThemeMode;
  changed: boolean;
}

interface PreloadState {
  show: boolean;
}

export interface AppState {
  theme: ThemeState;
  preload: PreloadState;
}

export interface AppEvents {
  toggleThemeMode: void;
  setShowPreload: boolean;
}

const appModule: StoreonModule<AppState, AppEvents> = (store) => {
  store.on('@init', () => ({
    theme: {
      mode: typeof window !== 'undefined' && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
        ? ThemeMode.Dark
        : ThemeMode.Light,
      changed: false,
    },
    preload: {
      show: true,
    },
  }));

  store.on('toggleThemeMode', (state) => ({
    ...state,
    theme: {
      ...state.theme,
      changed: true,
      mode: state.theme.mode === ThemeMode.Light
        ? ThemeMode.Dark
        : ThemeMode.Light,
    },
  }));

  store.on('setShowPreload', (state, show) => ({
    ...state,
    preload: {
      ...state.preload,
      show,
    },
  }));
};

export default appModule;
