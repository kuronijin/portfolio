import { StoreonModule } from 'storeon';

interface PreloadState {
  show: boolean;
}

export interface AppState {
  preload: PreloadState;
}

export interface AppEvents {
  setShowPreload: boolean;
}

const appModule: StoreonModule<AppState, AppEvents> = (store) => {
  store.on('@init', () => ({
    preload: {
      show: true,
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
