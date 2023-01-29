import type { NextPage } from 'next';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

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
    <div>
      <div>
        <Title>
          Title
          {/* {theme.changed ? 'Saved theme' : 'Default theme'} */}
        </Title>
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
    </div>
  );
};

export default HomePage;
