import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TwoColumnCon.styles';

const TwoColumnCon = ({ children, searchWidth, searchHeight }) => {
  return (
    <S.TwoColumnCon width={searchWidth} height={searchHeight}>
      {children}
    </S.TwoColumnCon>
  );
};

TwoColumnCon.propTypes = { children: PropTypes.node.isRequired };

export default TwoColumnCon;
