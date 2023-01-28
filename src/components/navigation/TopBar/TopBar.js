import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

import NavigationLink from '../../NavigationLink/NavigationLink';
import { navigationArray } from '../../../constant/navigation';

const AppBar = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navigationMain};
  padding: 10px 12px;
  border-bottom: 1px solid black;
  padding-left: 40px;
  padding-right: 40px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateQuizWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
`;

export const CreateQuizText = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0 40px 0 10px;
  white-space: nowrap;
`;

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar>
      {navigationArray.map((item) => (
        <ListItem key={item.id}>
          <NavigationLink data={item} />
        </ListItem>
      ))}
      <CreateQuizWrapper onClick={() => navigate('/createQuiz')}>
        <IconWrapper>
          <FontAwesomeIcon icon={faSquarePlus} />
        </IconWrapper>
        <CreateQuizText>Create a quiz</CreateQuizText>
      </CreateQuizWrapper>
      <IconWrapper onClick={() => navigate('/login')}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </IconWrapper>
    </AppBar>
  );
};

export default TopBar;
