import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';
import GlobalContext from '../../Context/GlobalContext';
import dayjs from 'dayjs';

const Header = ({ children, headerHeight, title }) => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => setMonthIndex(monthIndex - 1);

  const handleNextMonth = () => setMonthIndex(monthIndex + 1);

  return (
    <S.Header height={headerHeight}>
      <S.Title>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</S.Title>
      <S.Next onClick={handlePrevMonth}>&#60;</S.Next>
      <S.Previous onClick={handleNextMonth}>&#62;</S.Previous>
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
