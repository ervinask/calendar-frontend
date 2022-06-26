import React from 'react';
import PropTypes from 'prop-types';
import * as S from './NavigationContent.styles';

const NavigationContent = ({ navContentHeight, navContentWidth, children }) => {
  return (
    <S.NavigationContent height={navContentHeight} width={navContentWidth}>
      {children}
    </S.NavigationContent>
  );
};

NavigationContent.propTypes = {
  NavigationContent: PropTypes.number.isRequired,
};

export default NavigationContent;
