import React from 'react';
import { getMonth } from '../util';
import Calendar from '../components/Calendar/Calendar';
import Navigation from '../components/Navigation/Navigation';

const Main = () => {
  return (
    <>
      <Navigation navWidth={`3.5rem`} handleClick={() => alert('ate')} />
      <Calendar month={getMonth()} />
    </>
  );
};

export default Main;
