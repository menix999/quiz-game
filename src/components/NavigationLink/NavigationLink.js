import { useMatch, useResolvedPath, Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItemText = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.24s ease-in-out;
  white-space: nowrap;
`;

const StyledListItemButton = styled.div`
  display: flex;
  padding: 12px 20px;
  font-size: 20px;
  color: ${({ theme, match }) => match && theme.colors.black};
  background-color: ${({ theme, match }) =>
    match && theme.colors.checkedNavSideBar};

  transition: 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.colors.checkedNavSideBar};
  }
`;
const StyledListItemIcon = styled.div`
  color: ${({ theme, match }) => match && theme.colors.black};
  margin-right: 8px;
`;

const NavigationLink = ({ data, isOpen }) => {
  const { text, path, Icon } = data;

  const resolved = useResolvedPath(path);
  const match = useMatch(resolved.pathname);

  return (
    <Link to={path}>
      <StyledListItemButton match={match ? 1 : 0}>
        <StyledListItemIcon>
          <Icon />
        </StyledListItemIcon>
        <ListItemText isOpen={isOpen}>{isOpen && text}</ListItemText>
      </StyledListItemButton>
    </Link>
  );
};

export default NavigationLink;
