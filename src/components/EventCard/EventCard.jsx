import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './EventCard.styles';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({ title, date, startTime, endTime, description, handleClick, handleDelete }) => {
  return (
    <S.EventCard onClick={handleClick}>
      <S.Icon icon={faTrashCan} onClick={handleDelete} />
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
