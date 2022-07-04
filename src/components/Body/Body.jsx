import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Body.styles';

const Body = ({ children }) => {
  return <S.Body>{children}</S.Body>;
};

Body.propTypes = { children: PropTypes.node.isRequired };

export default Body;
