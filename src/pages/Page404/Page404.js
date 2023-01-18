import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { routes } from '../../routes';
import { useSetDocumentTitle } from '../../hooks/useSetDocumentTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  max-width: calc(100% - 2 * 12px);
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

const Content = styled.div`
  margin-top: 10px;
  text-align: center;
  max-width: 450px;
`;

const Page404 = () => {
  const navigate = useNavigate();

  useSetDocumentTitle('404');

  return (
    <Container>
      <Title variant="h4">Podana strona nie istnieje</Title>
      <Content variant="body1">
        Niestety strona którą chcesz odwiedzić nie istnieje. Prawdopodobnie
        została przeniesiona lub źle wpisałeś adres.
      </Content>
      <button type="button" onClick={() => navigate(routes.login)}>
        Wróć na stronę główną
      </button>
    </Container>
  );
};

export default Page404;
