import React, { useContext } from 'react';
import * as S from './CalendarHeader.styles';
import GlobalContext from '../../Context/GlobalContext';
import dayjs from 'dayjs';

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => setMonthIndex(monthIndex - 1);

  const handleNextMonth = () => setMonthIndex(monthIndex + 1);
  return (
    <S.CalendarHeader>
      <S.Title>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</S.Title>
      <S.Next onClick={handlePrevMonth}>&#60;</S.Next>
      <S.Previous onClick={handleNextMonth}>&#62;</S.Previous>
    </S.CalendarHeader>
  );
};

export default CalendarHeader;
