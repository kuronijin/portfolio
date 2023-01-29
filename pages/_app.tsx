import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import store, { CustomContext } from 'store';

import GlobalStyle from 'components/GlobalStyles';
import { PagePreloader } from 'components/_pages/common';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomContext.Provider value={store}>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CustomContext.Provider>
  );
}
