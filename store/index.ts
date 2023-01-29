import { createContext } from 'react';

import { createStoreon } from 'storeon';
import { customContext } from 'storeon/react';
import { storeonDevtools } from 'storeon/devtools';
import { crossTab } from '@storeon/crosstab';

import storeModules, {
  type CombinedState,
  type CombinedEvents,
  crossTabEvents,
} from './components';

const store = createStoreon<CombinedState, CombinedEvents>([
  ...storeModules,
  ...(
    typeof window !== 'undefined' ? [
      crossTab({ filter: (event) => crossTabEvents.includes(event) }),
    ] : []
  ),
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);

export const CustomContext = createContext(store);

export const useStoreon = customContext(CustomContext);

export default store;
