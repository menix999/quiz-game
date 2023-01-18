import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlusCircleIcon } from 'react-line-awesome';

export const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  align-items: flex-start;
`;
export const Title = styled.h2`
  padding-bottom: 1rem;
`;

const Task = styled.div`
  width: 500px;
  background: ${({ theme }) => theme.colors.sideBarNav};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 1rem;
  margin-left: 1rem;
`;

const SectionTitle = styled.h3`
  padding: 1rem 0;
`;
const TasksWrapper = styled.div``;
const TaskItem = styled.li`
  width: 350px;
  //border: 1px solid ${({ theme }) => theme.colors.black};
  //background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 0.2rem;
  margin: 0.6rem 0.2rem;
  transition: 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.colors.checkedNavSideBar};
  }
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.3rem;
`;
const TaskInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 15px;
`;

const TaskButtonWrapper = styled.div`
  cursor: pointer;
`;

const Tasks = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getInitialItemsFromStorage();
  }, []);

  const getInitialItemsFromStorage = () => {
    const items = { ...localStorage };
    const arr = [];
    for (const [key, value] of Object.entries(items)) {
      if (/^(.*?(\b-todo\b)[^$]*)$/gm.test(key)) {
        arr.push(value);
      }
    }
    setTasks(arr);
  };

  const handleStorageSave = () => {
    window.localStorage.setItem(`${input}-todo`, input);
    const items = { ...localStorage };
    for (const [key, value] of Object.entries(items)) {
      if (/^(.*?(\b-todo\b)[^$]*)$/gm.test(key) && !tasks.includes(value)) {
        setTasks((prev) => [...prev, value]);
      }
    }
  };

  return (
    <Wrapper>
      <Task>
        <Title>Personal</Title>
        <SectionTitle>Today</SectionTitle>
        <TasksWrapper>
          {tasks.map((item, id) => (
            <TaskItem key={item}>{item}</TaskItem>
          ))}
        </TasksWrapper>
        <SectionTitle>Tommorow</SectionTitle>
        <TasksWrapper>
          <TaskItem>Go to vet with Azor</TaskItem>
          <TaskItem>Grandmas b-day</TaskItem>
        </TasksWrapper>
        <SectionTitle>Upcoming</SectionTitle>
      </Task>
      <Task>
        <Title>Add task</Title>
        <InputWrapper>
          <TaskInput
            placeholder="Add new task"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <TaskButtonWrapper>
            <PlusCircleIcon onClick={handleStorageSave} />
          </TaskButtonWrapper>
        </InputWrapper>
      </Task>
    </Wrapper>
  );
};

export default Tasks;
