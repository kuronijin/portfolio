import type { NextPage, GetStaticProps } from 'next';
import styled from 'styled-components';

import { useStoreon } from 'store';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.palette.common.black};
`;

const HomePage: NextPage = () => {
  const { dispatch, theme } = useStoreon('theme');

  return (
    <div>
      <div>
        <Title>
          Title
          {/* {theme.changed ? 'Saved theme' : 'Default theme'} */}
        </Title>
        <button onClick={() => dispatch('toggleThemeMode')}>toggle theme</button>
      </div>
    </div>
  );
};

export default HomePage;
