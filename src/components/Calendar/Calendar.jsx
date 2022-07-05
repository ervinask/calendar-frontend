import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Calendar.styles';
import Month from '../Month/Month';
import Weekdays from '../Weekdays/Weekdays';
import Weekday from '../Weekday/Weekday';

const Calendar = ({ month, calendarHeight, calendarWidth }) => {
  const weekDaysNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <S.Calendar height={calendarHeight} width={calendarWidth}>
      <Weekdays>
        {weekDaysNames.map((name) => (
          <Weekday day={name} />
        ))}
      </Weekdays>
      <Month month={month} events={''} />
    </S.Calendar>
  );
};

Calendar.propTypes = {
  calendarHeight: PropTypes.string.isRequired,
  calendarWidth: PropTypes.string.isRequired,
};

export default Calendar;
