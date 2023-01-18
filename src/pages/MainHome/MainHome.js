import React from 'react';
import styled from 'styled-components';
import { Title } from '../tasks/Tasks';

export const Wrapper = styled.div`
  margin: 1rem;
`;
const MainHome = () => {
  return (
    <Wrapper>
      <Title>Welcome in our TODO app</Title>
      <p> Enjoy using the app</p>
    </Wrapper>
  );
};

export default MainHome;
