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

const storeModules = [
  appModule,
];

export default storeModules;
