import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';

const Header = ({ headerHeight, title }) => {
  return (
    <S.Header height={headerHeight}>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};

Header.propTypes = {
  headerHeight: PropTypes.string.isRequired,
};

export default Header;
