/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import Checkbox from 'react-custom-checkbox';

const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding: 20px;
`;

const QuestionsWrapper = styled.div`
  display: grid;
  /* grid-auto-rows: minmax(150px, auto); */
  grid-gap: 20px;
  height: 100%;
  width: 100%;
  border: 1px solid #c8bbbb;
  padding: 18px;
  border-radius: 16px;
`;

const QuizQuestionBox = styled.div`
  display: flex;
  position: relative;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #914993;
  border-radius: 16px;
`;

const QuizAnswerBox1 = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ce0000;
  border-radius: 16px;
`;

const QuizAnswerBox2 = styled(QuizAnswerBox1)`
  background-color: #021af3;
`;

const QuizAnswerBox3 = styled(QuizAnswerBox1)`
  background-color: #d8cf00;
`;

const QuizAnswerBox4 = styled(QuizAnswerBox1)`
  background-color: #008305;
`;

const AddAnswerInput = styled.textarea`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  color: white;
  padding-right: 70px;

  ::placeholder {
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 100%;
  }
`;

const CorrectAnswerInputWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

const MenuWrapper = styled.div`
  display: flex;
  background-color: #efefef;
  border: 1px solid #c9c9c9;
  border-radius: 6px;
  padding: 4px 12px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

const IcoNWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #52525c;
`;

const Text = styled.p`
  font-size: 20px;
  color: #5d3fd3;
  margin-left: 8px;
  white-space: nowrap;
`;

const NumberOfQuestionWrapper = styled.div`
  background-color: #914993;
  border-radius: 8px;
  padding: 4px 12px;
`;

const NumberOfQuestionText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const BottomSide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

const NextQuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  border: 1px solid #c9c9c9;
  border-radius: 6px;
  padding: 4px 12px;
  margin-right: 16px;
  cursor: pointer;

  ${Text} {
    margin: 0;
  }
`;

const FinishQuizWrapper = styled(NextQuestionWrapper)`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  border: 1px solid #c9c9c9;
  border-radius: 6px;
  padding: 4px 12px;
`;

const IconCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: white;
`;

const QuizPage = ({ isEdit }) => {
  const navigate = useNavigate();

  return (
    <QuizWrapper>
      <Topbar>
        <MenuWrapper onClick={() => navigate('/home')}>
          <IcoNWrapper>
            <FontAwesomeIcon icon={faArrowLeft} />
          </IcoNWrapper>
          <Text>Go to Menu</Text>
        </MenuWrapper>
        <NumberOfQuestionWrapper>
          <NumberOfQuestionText>1 / 20</NumberOfQuestionText>
        </NumberOfQuestionWrapper>
      </Topbar>
      <QuestionsWrapper>
        <QuizQuestionBox>
          <AddAnswerInput type="textarea" placeholder="Add question..." />
        </QuizQuestionBox>
        <QuizAnswerBox1>
          <AddAnswerInput type="text" placeholder="Add answer 1" />
          <CorrectAnswerInputWrapper>
            <Checkbox
              checked={false}
              icon={
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#239e27',
                    alignSelf: 'stretch'
                  }}>
                  <IconCheckboxWrapper>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconCheckboxWrapper>
                </div>
              }
              borderRadius={20}
              style={{ overflow: 'hidden', border: '2px solid #239e27' }}
              size={34}
            />
          </CorrectAnswerInputWrapper>
        </QuizAnswerBox1>
        <QuizAnswerBox2>
          <AddAnswerInput type="text" placeholder="Add answer 2" />
          <CorrectAnswerInputWrapper>
            <Checkbox
              checked={false}
              icon={
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#239e27',
                    alignSelf: 'stretch'
                  }}>
                  <IconCheckboxWrapper>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconCheckboxWrapper>
                </div>
              }
              borderRadius={20}
              style={{ overflow: 'hidden', border: '2px solid #239e27' }}
              size={34}
            />
          </CorrectAnswerInputWrapper>
        </QuizAnswerBox2>
        <QuizAnswerBox3>
          <AddAnswerInput type="text" placeholder="Add answer 3" />
          <CorrectAnswerInputWrapper>
            <Checkbox
              checked={false}
              icon={
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#239e27',
                    alignSelf: 'stretch'
                  }}>
                  <IconCheckboxWrapper>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconCheckboxWrapper>
                </div>
              }
              borderRadius={20}
              style={{ overflow: 'hidden', border: '2px solid #239e27' }}
              size={34}
            />
          </CorrectAnswerInputWrapper>
        </QuizAnswerBox3>
        <QuizAnswerBox4>
          <AddAnswerInput type="text" placeholder="Add answer 4" />
          <CorrectAnswerInputWrapper>
            <Checkbox
              checked={false}
              icon={
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#239e27',
                    alignSelf: 'stretch'
                  }}>
                  <IconCheckboxWrapper>
                    <FontAwesomeIcon icon={faCheck} />
                  </IconCheckboxWrapper>
                </div>
              }
              borderRadius={20}
              style={{ overflow: 'hidden', border: '2px solid #239e27' }}
              size={34}
            />
          </CorrectAnswerInputWrapper>
        </QuizAnswerBox4>
      </QuestionsWrapper>
      <BottomSide>
        <FinishQuizWrapper>
          <Text>Finish quiz</Text>
        </FinishQuizWrapper>
        <NextQuestionWrapper>
          <Text>Next question</Text>
        </NextQuestionWrapper>
      </BottomSide>
    </QuizWrapper>
  );
};

export default QuizPage;
