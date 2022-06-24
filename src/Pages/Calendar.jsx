import React from 'react';
import { getMonth } from '../util';
import Calendar from '../components/Calendar/Calendar';

const Main = () => {
  return <Calendar month={getMonth()} />;
};

export default Main;
