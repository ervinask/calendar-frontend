import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Month.styles';
import dayjs from 'dayjs';
import GlobalContext from '../../Context/GlobalContext';
import Day from '../Day/Day';
import Event from '../Event/Event';

const url = process.env.REACT_APP_BACK_URL;

const Month = ({ month }) => {
  const { getEvent, setGetEvent, eventModal, setEventModal, setCurrentEventData, monthIndex } =
    useContext(GlobalContext);

  const getEvents = async () => {
    try {
      const res = await fetch(`${url}v1/events/`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await res.json();
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
  return (
    <S.Month>
      {month.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              color={
                day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
                  ? 'red'
                  : monthIndex + 1 === Number(day.format('M'))
                  ? 'black'
                  : 'grey'
              }
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
  month: PropTypes.array.isRequired,
};

export default Month;
