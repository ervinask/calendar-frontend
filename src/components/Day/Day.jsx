import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Day.styles';

const Day = ({ day, children, color }) => {
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
