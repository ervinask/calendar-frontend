import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Event.styles';

const Event = ({ children }) => {
  return <S.Event>{children}</S.Event>;
};

Event.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Event;
