import {
  type FC,
  type PropsWithChildren,
} from 'react';
import styled from 'styled-components';

import Header from 'components/Header';

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main>
        {children}
      </main>
    </Layout>
  );
};

export default MainLayout;
