import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Weekdays.styles';

const Weekdays = ({ children }) => {
  return <S.Weekdays>{children}</S.Weekdays>;
};

Weekdays.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Weekdays;
