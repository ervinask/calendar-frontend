import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';

const Header = ({ children }) => {
  return <S.Header>{children}</S.Header>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Weekdays;
