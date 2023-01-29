import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useTheme } from 'next-themes';
import styled from 'styled-components';

import { ContentLayout } from 'components/_layouts';

const Title = styled.h1`
  font-size: 50px;
  color: var(--fg);
`;

const HomePage: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(
    () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    },
    [theme, setTheme],
  );

  return (
    <ContentLayout>
      <Title>
        Title
        {/* {theme.changed ? 'Saved theme' : 'Default theme'} */}
      </Title>
      <button onClick={toggleTheme}>toggle theme</button>
    </ContentLayout>
  );
};

export default HomePage;
