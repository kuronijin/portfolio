import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useTheme } from 'hooks';
import store, { CustomContext } from 'store';

import GlobalStyle from 'components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();

  return (
    <CustomContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <PagePreloader /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CustomContext.Provider>
  );
}
