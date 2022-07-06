import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';

const Header = ({ title }) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};

Header.propTypes = {
  headerHeight: PropTypes.string.isRequired,
};

export default Header;
