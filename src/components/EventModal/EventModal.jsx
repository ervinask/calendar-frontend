import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './EventModal.styles';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPen, faAlignJustify, faCalendar, faClose } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../../Context/GlobalContext';

const EventModal = ({ title, date, startTime, endTime, description }) => {
  const { setEventModal } = useContext(GlobalContext);

  return (
    <S.Modal>
      <S.EventModal>
        <S.CloseButton
          icon={faClose}
          onClick={() => {
            setEventModal(false);
          }}
        />
        <S.Con>
          <S.EventIcon>
            <FontAwesomeIcon icon={faAlignJustify} />
          </S.EventIcon>
          <S.EventTitle>{title}</S.EventTitle>
        </S.Con>
        <S.Con>
          <S.EventIcon>
            <FontAwesomeIcon icon={faCalendar} />
          </S.EventIcon>
          <S.EventDate>{date}</S.EventDate>
        </S.Con>
        <S.Con>
          <S.EventIcon>
            <FontAwesomeIcon icon={faClock} />
          </S.EventIcon>
          <S.EventStartTime>{startTime}</S.EventStartTime>-<S.EventEndTime>{endTime}</S.EventEndTime>
        </S.Con>
        <S.Con>
          <S.EventIcon>
            <FontAwesomeIcon icon={faPen} />
          </S.EventIcon>
          <S.EventDesc>{description}</S.EventDesc>
        </S.Con>
      </S.EventModal>
    </S.Modal>
  );
};

export default EventModal;
