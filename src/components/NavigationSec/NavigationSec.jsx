import React from 'react';
import PropTypes from 'prop-types';
import * as S from './NavigationSec.styles';

const NavigationSec = ({ children, background }) => {
  return <S.NavigationSec background={background}>{children}</S.NavigationSec>;
};

NavigationSec.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationSec;
