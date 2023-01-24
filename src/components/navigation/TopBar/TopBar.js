import styled from 'styled-components';

import NavigationLink from '../../NavigationLink/NavigationLink';
import { navigationArray } from '../../../constant/navigation';

const AppBar = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navigationMain};
  padding: 10px 12px;
  border-bottom: 1px solid black;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = () => {
  return (
    <AppBar>
      {navigationArray.map((item) => (
        <ListItem key={item.id}>
          <NavigationLink data={item} />
        </ListItem>
      ))}
    </AppBar>
  );
};

export default TopBar;
