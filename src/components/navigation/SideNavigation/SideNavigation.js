import styled, { css } from 'styled-components';
import { navigationArray } from '../../../constant/navigation';
import { useIsSideNavigationOpenState } from '../../../context/isSideNavigationOpenContext/isSideNavigationOpenContext';
import NavigationLink from '../../NavigationLink/NavigationLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.sideBarNav};
  transition: 0.24s ease-in-out;
  ${({ isOpen }) =>
    isOpen
      ? css`
          width: 320px;
        `
      : css`
          width: 70px;
        `};
`;

const Divider = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SideNavigation = () => {
  const isSideNavOpen = useIsSideNavigationOpenState();

  return (
    <Wrapper isOpen={isSideNavOpen}>
      {navigationArray.map((item) => (
        <ListItem key={item.id}>
          <NavigationLink data={item} isOpen={isSideNavOpen} />
          <Divider />
        </ListItem>
      ))}
    </Wrapper>
  );
};

export default SideNavigation;
