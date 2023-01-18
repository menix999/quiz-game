import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetDocumentTitle } from '../../hooks/useSetDocumentTitle';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mainbox = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 400px;
  padding: 24px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 12px;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 25px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px black;
  box-shadow: 0 0 0.5em black;
  transition: 0.2s;
  padding: 0.3rem;
  margin-top: 20px;
  :hover {
    transform: scale(1.04);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 16px 0;
`;

export const TextInput = styled.input`
  width: 300px;
  height: 25px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px black;
  box-shadow: 0 0 0.5em black;
  outline: none;
  transition: 0.2s;
  :hover {
    transform: scale(1.02);
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: white;
  cursor: pointer;
`;

export const ResponseErrorMessage = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.error};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.weight.bold};
  margin: 8px 0 0 4px;
  text-align: left;
`;
const LoginPage = () => {
  useSetDocumentTitle('Login');
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/mainHome')
  }

  return (
    <Wrapper>
      <Mainbox>
        <Title>Log in</Title>
        <LoginForm>
          <InputWrapper>
            <TextInput type="text" placeholder="login" />
          </InputWrapper>
          <InputWrapper>
            <TextInput type="text" placeholder="password" />
          </InputWrapper>
        </LoginForm>
        <SubmitButton onClick={handleSubmit}>Log in</SubmitButton>
      </Mainbox>
    </Wrapper>
  );
};

export default LoginPage;
