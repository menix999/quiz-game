import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
`;

const MainBoxWrapper = styled.div`
  margin-bottom: 201px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
`;

const AuthorizationTemplate = () => {
  return (
    <StyledContainer>
      <MainWrapper>
        <MainBoxWrapper>
          <Outlet />
        </MainBoxWrapper>
      </MainWrapper>
    </StyledContainer>
  );
};

export default AuthorizationTemplate;
