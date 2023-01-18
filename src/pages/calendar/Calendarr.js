import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Title } from '../tasks/Tasks';
import { Wrapper } from '../MainHome/MainHome';
import 'react-calendar/dist/Calendar.css';

const Calendarr = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Wrapper>
      <Title>Calendar</Title>
      <Calendar onChange={onChange} value={value} />
    </Wrapper>
  );
};

export default Calendarr;
