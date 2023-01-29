import appModule, {
  AppState,
  AppEvents,
} from './app';

export interface CombinedState
  extends AppState {
}

export interface CombinedEvents
  extends AppEvents {
}

export const crossTabEvents: PropertyKey[] = [
  'toggleThemeMode',
];

const storeModules = [
  appModule,
];

export default storeModules;
