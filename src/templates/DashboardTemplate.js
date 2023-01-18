import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../components/navigation/TopBar/TopBar';
import ScrollableContainer from './ScrollableContainer';
import SideNavigation from '../components/navigation/SideNavigation/SideNavigation';

const StyledContainer = styled.div`
  height: 100vh;
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
        <SideNavigation />
        <ScrollableContainer>
          <Outlet />
        </ScrollableContainer>
      </ContentContainer>
    </StyledContainer>
  );
};

export default DashboardTemplate;
