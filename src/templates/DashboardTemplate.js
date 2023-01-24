import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../components/navigation/TopBar/TopBar';
import ScrollableContainer from './ScrollableContainer';

const StyledContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

const ContentContainer = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  overflow: hidden;
`;

const DashboardTemplate = () => {
  return (
    <StyledContainer>
      <TopBar />
      <ContentContainer>
        <ScrollableContainer>
          <Outlet />
        </ScrollableContainer>
      </ContentContainer>
    </StyledContainer>
  );
};

export default DashboardTemplate;
