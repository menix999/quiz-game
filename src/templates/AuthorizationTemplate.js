import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.mainBackground};
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
        <Outlet />
      </MainWrapper>
    </StyledContainer>
  );
};

export default AuthorizationTemplate;
