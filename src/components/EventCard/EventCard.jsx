import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './EventCard.styles';
import GlobalContext from '../../Context/GlobalContext';
import { useEffect } from 'react';

const EventCard = ({ title, date, startTime, endTime, description }) => {
  return (
    <S.EventCard>
      <S.Title>{title}</S.Title>
      <S.Time>
        <S.Date>{date}</S.Date>
        <S.ExactTime>
          {startTime}-{endTime}
        </S.ExactTime>
      </S.Time>
      <S.Desc>{description}</S.Desc>
    </S.EventCard>
  );
};

EventCard.propTypes = {};

export default EventCard;
