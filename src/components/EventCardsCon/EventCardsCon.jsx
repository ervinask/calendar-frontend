import React from 'react';
import PropTypes from 'prop-types';
import * as S from './EventCardsCon.styles';

const EventCardsCon = ({ children }) => {
  return <S.EventCardsCon>{children}</S.EventCardsCon>;
};

EventCardsCon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventCardsCon;
