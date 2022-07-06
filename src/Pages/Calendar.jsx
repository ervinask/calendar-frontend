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

  let navWidth = '4rem';
  let headerHeight = '6rem';

  setCreateEventModal(true);

  return (
    <Body>
      <CalendarHeader headerHeight={headerHeight}></CalendarHeader>
      <Navigation navWidth={navWidth} navHeight={`calc(100vh - ${headerHeight})`} />

      <Calendar
        month={currentMonth}
        calendarHeight={`calc(100vh - ${headerHeight})`}
        calendarWidth={`calc(100% - ${navWidth})`}
      />
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
