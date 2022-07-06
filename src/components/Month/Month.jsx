import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Month.styles';
import dayjs from 'dayjs';
import Day from '../Day/Day';
import Event from '../Event/Event';
import GlobalContext from '../../Context/GlobalContext';

const Month = ({ month }) => {
  const { getEvent, setGetEvent, eventModal, setEventModal, setCurrentEventData, currentEventData } =
    useContext(GlobalContext);

  const getEvents = async () => {
    try {
      const res = await fetch('http://localhost:8080/v1/events/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await res.json();
      console.log(data);
      setGetEvent(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const selectedEvent = (day) => {
    return setCurrentEventData(...getEvent.filter((item) => item.id === day));
  };

  console.log(getEvent);
  return (
    <S.Month>
      {month.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              color={day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? '#F05151' : 'black'}
            >
              {getEvent &&
                getEvent.map(
                  (item, idx) =>
                    item.date === day.format('YYYY-MM-DD') && (
                      <div
                        tabIndex="1"
                        key={idx}
                        onClick={() => {
                          getEvents();
                          setEventModal(!eventModal);
                          selectedEvent(item.id);
                          console.log(currentEventData);
                        }}
                      >
                        <Event key={idx}>{item.title}</Event>
                      </div>
                    )
                )}
            </Day>
          ))}
        </React.Fragment>
      ))}
    </S.Month>
  );
};

Month.propTypes = {
  month: PropTypes.isRequired,
};

export default Month;
