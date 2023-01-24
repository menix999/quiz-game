import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.mainGrayForFrame};
  border: 1px solid ${({ theme }) => theme.border.mainBorder};
  border-radius: 8px;
  box-shadow: 0 0 1em ${({ theme }) => theme.border.mainBorder};
  padding: 24px;
`;

const ProfileTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
`;

const InformationAboutUserWrapper = styled.div`
  margin-bottom: 40px;
`;

const InformationAboutPasswordUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TextTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ButtonChangePasswordWrapper = styled.div``;

const ButtonChangePassword = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainButtons};
  border-radius: 6px;
  width: 100px;
  border: 1px solid ${({ theme }) => theme.colors.buttonWhiteBorder};
  height: 20px;
  cursor: pointer;
  color: white;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <CardProfile>
        <ProfileTitle>Profile</ProfileTitle>
        <Divider />
        <InformationAboutUserWrapper>
          <TextTitle>Username:</TextTitle>
        </InformationAboutUserWrapper>
        <InformationAboutPasswordUserWrapper>
          <TextTitle>Password:</TextTitle>
          <ButtonChangePasswordWrapper>
            <ButtonChangePassword>Change</ButtonChangePassword>
          </ButtonChangePasswordWrapper>
        </InformationAboutPasswordUserWrapper>
        <InformationAboutUserWrapper>
          <TextTitle>E-mail:</TextTitle>
        </InformationAboutUserWrapper>
        <InformationAboutUserWrapper>
          <TextTitle>Quizes made:</TextTitle>
        </InformationAboutUserWrapper>
        <InformationAboutUserWrapper>
          <TextTitle>Quizes done:</TextTitle>
        </InformationAboutUserWrapper>
      </CardProfile>
    </ProfileWrapper>
  );
};

export default Profile;