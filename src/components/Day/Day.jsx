import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Day.styles';
import GlobalContext from '../../Context/GlobalContext';
import { useEffect } from 'react';

const Day = ({ children, day, color }) => {
  return (
    <S.Day>
      <S.Text color={color}>{day.format('DD')}</S.Text>
      {children}
    </S.Day>
  );
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default Day;
