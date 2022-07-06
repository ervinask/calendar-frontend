import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from '../util';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';
import Navigation from '../components/Navigation/Navigation';
import CalendarHeader from '../components/CalendarHeader/CalendarHeader';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';
import EventModal from '../components/EventModal/EventModal';

const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, eventModal, setEventModal, currentEventData, setCreateEventModal } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  const token = localStorage.getItem('token');
  if (!token) {
    return navigate('/login');
  }

  setCreateEventModal(true);

  return (
    <Body>
      <CalendarHeader />
      <Navigation />

      <Calendar month={currentMonth} />
      {eventModal && (
        <EventModal
          title={currentEventData.title}
          date={currentEventData.date}
          startTime={currentEventData.startTime}
          endTime={currentEventData.endTime}
          description={currentEventData.description ? currentEventData.description : '-'}
        />
      )}
    </Body>
  );
};

export default Main;
