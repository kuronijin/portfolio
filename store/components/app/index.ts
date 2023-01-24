import { StoreonModule } from 'storeon';

import { ThemeMode } from 'types';

import {
  getLocalStorageValue,
  setLocalStorageValue,
} from 'utils';

interface ThemeState {
  mode: ThemeMode;
}

export interface AppState {
  theme: ThemeState;
}

export interface SetThemeModePayload {

}

export interface AppEvents {
  changeThemeMode: ThemeMode;
  setThemeMode: ThemeMode;
}

const appModule: StoreonModule<AppState, AppEvents> = (store) => {
  store.on('@init', () => {
    const themeMode = getLocalStorageValue('theme_mode') as ThemeMode;

    return {
      theme: {
        mode: themeMode || ThemeMode.Light,
      },
    };
  });

  store.on('changeThemeMode', (state, mode) => {
    store.dispatch('setThemeMode', mode);
    setLocalStorageValue({ theme_mode: mode });
  });

  store.on('setThemeMode', (state, mode) => {
    return {
      ...state,
      theme: {
        ...state.theme,
        mode,
      },
    };
  });
};

export default appModule;
