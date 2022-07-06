import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './CreateEventForm.styles';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPen, faAlignJustify, faCalendar, faClose } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../../Context/GlobalContext';

const CreateEventForm = ({}) => {
  const [eventValues, updateEventValues] = useState();
  const { event, setEvent, getEvent, setGetEvent } = useContext(GlobalContext);

  const sendEventInfo = async () => {
    try {
      const res = await fetch(`http://localhost:8080/v1/events/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(eventValues),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.CreateEventForm
      onSubmit={(e) => {
        e.preventDefault();
        sendEventInfo();
        setEvent(false);
        setGetEvent([...getEvent, eventValues]);
        console.log(getEvent);
      }}
    >
      <S.CloseButton icon={faClose} onClick={() => setEvent(false)} />
      <S.Con>
        <S.EventLabel htmlFor="title">
          <FontAwesomeIcon icon={faAlignJustify} />
        </S.EventLabel>
        <S.TitleInput
          type="text"
          placeholder="Title"
          id="title"
          onChange={(e) => updateEventValues({ ...eventValues, title: e.target.value })}
          required
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
          required
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
          required
        />
        -
        <S.EndTimeInput
          type="time"
          id="end-time"
          onChange={(e) => updateEventValues({ ...eventValues, endTime: e.target.value })}
          required
        />
      </S.Con>
      <S.Con>
        <S.EventLabel htmlFor="date">
          <FontAwesomeIcon icon={faPen} />
        </S.EventLabel>
        <S.DescInput
          type="date"
          id="date"
          onChange={(e) => updateEventValues({ ...eventValues, description: e.target.value })}
        />
      </S.Con>
      <Button type="submit">Save</Button>
    </S.CreateEventForm>
  );
};

export default CreateEventForm;
