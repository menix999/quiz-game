import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CircleLoader from '../../components/circleLoader/CircleLoader';
import { emailRegex } from '../../constant/regex';
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
  justify-content: center;
  flex-direction: column;
  width: 450px;
  height: 500px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.mainGrayForFrame};
  border: 1px solid ${({ theme }) => theme.border.mainBorder};
  border-radius: 8px;
  box-shadow: 0 0 1em ${({ theme }) => theme.border.mainBorder};
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: ${({ theme }) => theme.colors.mainBackground};
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

export const TextError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  position: absolute;
  bottom: -18px;
`;

export const CreateAccountWrapper = styled.p`
  margin-top: 20px;
  justify-content: center;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.lighterText};
  }
`;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useSetDocumentTitle('Login');

  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      await axios
        .post('http://127.0.0.1:8000/api/login', {
          email,
          password
        })
        .then((resposne) => console.log('resposne', resposne));

      setIsLoading(false);

      toast.success('successfully logged in');

      navigate('/home');

      reset();
    } catch (error) {
      console.log('error', error);
      if (error?.response?.statusText === 'Unauthorized') {
        toast.warning('You entered wrong address e-mail or password');
      }
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Mainbox onSubmit={handleSubmit(onSubmit)}>
        <Title>Log in</Title>
        <LoginForm>
          <Controller
            rules={{
              required: {
                value: true,
                message: 'This field is required'
              },
              pattern: {
                value: emailRegex,
                message: 'You entered wrong format of adress e-mail'
              }
            }}
            render={({ field: { onChange, value } }) => (
              <InputWrapper>
                <TextInput
                  type="text"
                  placeholder="email"
                  onChange={onChange}
                  value={value}
                />
                <TextError>
                  {errors?.email?.message && errors.email.message}
                </TextError>
              </InputWrapper>
            )}
            control={control}
            defaultValue=""
            name="email"
          />
          <Controller
            rules={{
              required: {
                value: true,
                message: 'This field is required'
              }
            }}
            render={({ field: { onChange, value } }) => (
              <InputWrapper>
                <TextInput
                  type="password"
                  placeholder="password"
                  onChange={onChange}
                  value={value}
                />
                <TextError>
                  {errors?.password?.message && errors.password.message}
                </TextError>
              </InputWrapper>
            )}
            control={control}
            defaultValue=""
            name="password"
          />
        </LoginForm>
        <SubmitButton onClick={handleSubmit}>
          {isLoading ? <CircleLoader loading={isLoading} /> : 'Log in'}
        </SubmitButton>
        <CreateAccountWrapper onClick={() => navigate('/register')}>
          Don't have an account?
        </CreateAccountWrapper>
      </Mainbox>
    </Wrapper>
  );
};

export default LoginPage;
