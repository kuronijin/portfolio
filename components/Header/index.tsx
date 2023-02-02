import {
  type FC,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';

import { ContentLayout } from 'components/_layouts';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: var(--bg-header);
  z-index: 100;
  
  & .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MenuContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  color: white;
  mix-blend-mode: difference;
  z-index: 110;
  
  & .content {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Header: FC = () => {
  return (
    <>
      <HeaderContainer>
        <ContentLayout className="content">
          <p>kuronijin</p>
        </ContentLayout>
      </HeaderContainer>

      <MenuContainer>
        <ContentLayout className="content">
          <p>asd</p>
        </ContentLayout>
      </MenuContainer>
    </>
  );
};

export default Header;
