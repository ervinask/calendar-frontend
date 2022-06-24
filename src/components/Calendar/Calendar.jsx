import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Calendar.styles';
import Month from '../Month/Month';
import Weekdays from '../Weekdays/Weekdays';
import Weekday from '../Weekday/Weekday';

const Calendar = ({ month }) => {
  const weekDaysNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <S.Calendar>
      <Weekdays>
        {weekDaysNames.map((name) => (
          <Weekday day={name} />
        ))}
      </Weekdays>
      <Month month={month} />
    </S.Calendar>
  );
};

Calendar.propTypes = {};

export default Calendar;
