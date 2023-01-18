import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { EyeIcon, EyeSlashIcon } from 'react-line-awesome';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Mainbox,
  Title,
  LoginForm,
  SubmitButton,
  TextInput,
  InputWrapper,
  IconWrapper,
  ResponseErrorMessage
} from '../login/LoginPage';
import { emailReg } from '../../utils/emailReg';

import { useSetDocumentTitle } from '../../hooks/useSetDocumentTitle';

const RegistrationPage = () => {
  const [isPasswordActive, setIsPasswordActive] = useState({
    pass: false,
    c_pass: false
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  useSetDocumentTitle('Registration');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, name, password, c_password } = data;
    navigate('/login');

    try {
      await axios
        .post('http://93.91.208.217/api/register', {
          email,
          name,
          password,
          c_password
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordChange = (e) => {
    if (e.currentTarget.id === 'pass') {
      setIsPasswordActive((prev) => ({ ...prev, pass: !prev.pass }));
    } else if (e.currentTarget.id === 'c_pass') {
      setIsPasswordActive((prev) => ({ ...prev, c_pass: !prev.c_pass }));
    }
  };

  return (
    <Wrapper>
      <Mainbox onSubmit={handleSubmit(onSubmit)}>
        <Title>Registration</Title>
        <LoginForm>
          <InputWrapper>
            <TextInput
              type="text"
              placeholder="login"
              {...register('name', {
                minLength: {
                  value: 3,
                  message: 'The minimum length of characters is 3'
                },
                maxLength: {
                  value: 20,
                  message: 'Too many characters max 20'
                }
              })}
            />
            <ResponseErrorMessage>{errors?.name?.message}</ResponseErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type={isPasswordActive.pass ? 'text' : 'password'}
              placeholder="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'The minimum length of characters is 6'
                },
                maxLength: {
                  value: 20,
                  message: 'Too many characters max 20'
                }
              })}
            />
            <IconWrapper id="pass" onClick={handlePasswordChange}>
              {isPasswordActive.pass ? <EyeIcon /> : <EyeSlashIcon />}
            </IconWrapper>
            <ResponseErrorMessage>
              {errors?.password?.message}
            </ResponseErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type={isPasswordActive.c_pass ? 'text' : 'password'}
              id="c_pass"
              placeholder="confirm password"
              {...register('c_password', {
                validate: (value) =>
                  value === watch('password') || 'Password do not match'
              })}
            />
            <IconWrapper id="c_pass" onClick={handlePasswordChange}>
              {isPasswordActive.c_pass ? <EyeIcon /> : <EyeSlashIcon />}
            </IconWrapper>
            <ResponseErrorMessage>
              {errors?.c_password?.message}
            </ResponseErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type="text"
              placeholder="e-mail"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Field cannot be empty'
                },
                pattern: {
                  value: emailReg,
                  message: 'Structure of address e-mail is incorrect'
                }
              })}
            />
            <ResponseErrorMessage>
              {errors?.email?.message}
            </ResponseErrorMessage>
          </InputWrapper>
          <SubmitButton type="submit">Register</SubmitButton>
        </LoginForm>
      </Mainbox>
    </Wrapper>
  );
};

export default RegistrationPage;
