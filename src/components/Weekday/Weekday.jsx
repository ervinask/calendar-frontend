import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Weekday.styles';

const Weekday = ({ day }) => {
  return <S.Weekday>{day}</S.Weekday>;
};

Weekday.propTypes = {
  day: PropTypes.string.isRequired,
};

export default Weekday;
