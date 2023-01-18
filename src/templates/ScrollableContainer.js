import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 30px;
`;

const ScrollableContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ScrollableContainer;
