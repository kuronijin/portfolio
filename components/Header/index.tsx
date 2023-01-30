import { type FC } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: var(--bg-secondary);
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <p>123</p>
    </HeaderContainer>
  )
};

export default Header;
