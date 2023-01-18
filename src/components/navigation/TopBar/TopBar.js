import styled from 'styled-components';
import { BarsIcon } from 'react-line-awesome';
import { useIsSideNavigationOpenDispatch } from '../../../context/isSideNavigationOpenContext/isSideNavigationOpenContext';

const AppBar = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navigationMain};
  padding: 10px 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
`;

const TopBar = () => {
  const handleToggleSideNavOpen = useIsSideNavigationOpenDispatch();

  return (
    <AppBar>
      <IconWrapper onClick={() => handleToggleSideNavOpen()}>
        <BarsIcon size="64px" />
      </IconWrapper>
    </AppBar>
  );
};

export default TopBar;
