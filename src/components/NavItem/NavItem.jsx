import React from 'react';
import PropTypes from 'prop-types';
import * as S from './NavItem.styles';

const NavItem = ({ children }) => {
  return <S.NavItem>{children}</S.NavItem>;
};

NavItem.propTypes = {};

export default NavItem;
