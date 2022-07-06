import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TwoColumnCon.styles';

const TwoColumnCon = ({ children }) => {
  return <S.TwoColumnCon>{children}</S.TwoColumnCon>;
};

TwoColumnCon.propTypes = { children: PropTypes.node.isRequired };

export default TwoColumnCon;
