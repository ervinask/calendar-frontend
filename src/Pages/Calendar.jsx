import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from '../util';
import Calendar from '../components/Calendar/Calendar';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';

const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const { error } = useContext(GlobalContext);
  console.log(error);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  let navWidth = '4rem';
  let headerHeight = '6rem';

  return (
    <Body>
      <Header headerHeight={headerHeight}></Header>
      <Navigation navWidth={navWidth} navHeight={`calc(100vh - ${headerHeight})`} />

      <Calendar
        month={currentMonth}
        calendarHeight={`calc(100vh - ${headerHeight})`}
        calendarWidth={`calc(100% - ${navWidth})`}
      />
    </Body>
  );
};

export default Main;
