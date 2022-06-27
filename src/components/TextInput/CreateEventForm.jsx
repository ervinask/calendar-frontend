import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CreateEventForm.styles';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPen, faAlignJustify, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CreateEventForm = ({}) => {
  const [eventValues, updateEventValues] = useState();

  return (
    <S.CreateEventForm
      onSubmit={(e) => {
        e.preventDefault();
        console.log(new Date());
      }}
    >
      <S.Con>
        <S.EventLabel htmlFor="title">
          <FontAwesomeIcon icon={faAlignJustify} />
        </S.EventLabel>
        <S.TitleInput
          type="text"
          placeholder="Title"
          id="title"
          onChange={(e) => updateEventValues({ ...eventValues, title: e.target.value })}
        />
      </S.Con>
      <S.Con>
        <S.EventLabel htmlFor="date">
          <FontAwesomeIcon icon={faCalendar} />
        </S.EventLabel>
        <S.DateInput
          type="date"
          id="date"
          onChange={(e) => updateEventValues({ ...eventValues, date: e.target.value })}
        />
      </S.Con>
      <S.Con>
        <S.EventLabel htmlFor="time">
          <FontAwesomeIcon icon={faClock} />
        </S.EventLabel>
        <S.StartTimeInput
          type="time"
          id="time"
          onChange={(e) => updateEventValues({ ...eventValues, startTime: e.target.value })}
        />
        -
        <S.EndTimeInput
          type="time"
          id="end-time"
          onChange={(e) => updateEventValues({ ...eventValues, endTime: e.target.value })}
        />
      </S.Con>
      <S.Con>
        <S.EventLabel htmlFor="date">
          <FontAwesomeIcon icon={faPen} />
        </S.EventLabel>
        <S.DescInput
          type="date"
          id="date"
          onChange={(e) => updateEventValues({ ...eventValues, desc: e.target.value })}
        />
      </S.Con>
      <Button type="submit">Save</Button>
    </S.CreateEventForm>
  );
};

export default CreateEventForm;
