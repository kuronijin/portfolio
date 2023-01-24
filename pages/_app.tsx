import type { AppProps } from 'next/app';

import store, { CustomContext } from 'store';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomContext.Provider value={store}>
      <Component {...pageProps} />
    </CustomContext.Provider>
  );
}
