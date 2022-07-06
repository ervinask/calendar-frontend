import React from 'react';
import PropTypes from 'prop-types';
import * as S from './NavItem.styles';

const NavItem = ({ handleClick, icon }) => {
  return (
    <S.NavItem onClick={handleClick}>
      <S.Icon icon={icon} />
    </S.NavItem>
  );
};

NavItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
};

export default NavItem;
