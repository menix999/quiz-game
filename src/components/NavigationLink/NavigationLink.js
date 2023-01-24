import { useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListItemText = styled.div`
  white-space: nowrap;
  margin-left: 12px;
`;

const NavLinkWrapper = styled(NavLink)`
  display: flex;
  padding: 12px 20px;
  font-size: 20px;
  color: ${({ theme, match }) => match && theme.colors.black};
  background-color: ${({ theme, match }) =>
    match && theme.colors.checkedNavSideBar};
  color: ${({ theme }) => theme.colors.purpleNavigationMain};
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid;
  margin-right: 30px;
  &.active {
    color: red;
  }
`;

const NavigationLink = ({ data }) => {
  const { text, path, Icon } = data;

  return (
    <NavLinkWrapper to={path}>
      <Icon />
      <ListItemText>{text}</ListItemText>
    </NavLinkWrapper>
  );
};

export default NavigationLink;
