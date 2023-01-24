import { createContext } from 'react';

import { createStoreon } from 'storeon';
import { customContext } from 'storeon/react';
import { storeonDevtools } from 'storeon/devtools';

import storeModules, {
  CombinedState,
  CombinedEvents,
} from './components';

const store = createStoreon<CombinedState, CombinedEvents>([
  ...storeModules,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);

export const CustomContext = createContext(store);

export const useStoreon = customContext(CustomContext);

export default store;
