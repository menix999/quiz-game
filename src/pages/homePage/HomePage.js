import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { random } from 'lodash';

import catAvatar from '../../components/AnimalAvatars/cat.png';
import foxAvatar from '../../components/AnimalAvatars/fox.jpg';
import fox2Avatar from '../../components/AnimalAvatars/fox2.png';
import hippo from '../../components/AnimalAvatars/hippo.jpg';
import monkey from '../../components/AnimalAvatars/monkey.png';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 40px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 360px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.mainBorder};
  border-radius: 8px;
  padding-left: 60px;
  font-size: 16px;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  bottom: 1px;
  left: 24px;
  color: #52525c;
`;

const QuizesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-top: 100px;
  margin-left: 100px;
`;

const QuizTitle = styled.p`
  width: 100%;
  margin-bottom: 20px;
  font-size: 22px;
  color: #800080;
`;

const QuizBox = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mainButtons};
  margin-right: 38px;
  margin-bottom: 38px;
  border-radius: 8px;
`;

const HomePage = () => {
  const animalAvatars = [catAvatar, foxAvatar, fox2Avatar, hippo, monkey];

  return (
    <HomePageWrapper>
      <SearchInputWrapper>
        <SearchInput type="text" placeholder="Search for a quiz..." />
        <SearchIconWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconWrapper>
      </SearchInputWrapper>
      <QuizesWrapper>
        <QuizTitle>Recent activity</QuizTitle>
        {animalAvatars.map(() => {
          const drawNumber = random(0, 4);
          return <QuizBox src={animalAvatars[drawNumber]} />;
        })}
      </QuizesWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
