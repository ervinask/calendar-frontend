import React from 'react';
import PropTypes from 'prop-types';
import * as S from './NavigationSec.styles';

const NavigationSec = ({ children, background }) => {
  return <S.NavigationSec background={background}>{children}</S.NavigationSec>;
};

NavigationSec.propTypes = {};

export default NavigationSec;
