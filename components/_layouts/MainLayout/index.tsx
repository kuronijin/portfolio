import {
  type FC,
  type PropsWithChildren,
} from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import { PagePreloader } from '../../_pages/common';

const Layout = styled.div`
  min-height: 100vh;
  padding-top: 60px;
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
