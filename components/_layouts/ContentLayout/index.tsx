import {
  type FC,
  type PropsWithChildren,
  memo,
} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1400px) {
    padding: 0 50px;
  }
  
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
`;

const ContentLayout: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default memo(ContentLayout);
