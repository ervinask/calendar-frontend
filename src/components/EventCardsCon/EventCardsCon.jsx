import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './EventCardsCon.styles';
import GlobalContext from '../../Context/GlobalContext';
import { useEffect } from 'react';

const EventCardsCon = ({ children }) => {
  return <S.EventCardsCon>{children}</S.EventCardsCon>;
};

EventCardsCon.propTypes = {};

export default EventCardsCon;
