import {
  type FC,
  type PropsWithChildren,
} from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <main>
        {children}
      </main>
    </Layout>
  );
};

export default MainLayout;
