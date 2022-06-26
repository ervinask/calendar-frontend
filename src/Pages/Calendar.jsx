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

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  let navWidth = '4rem';
  let headerHeight = '6rem';

  return (
    <Body>
      <Navigation navWidth={navWidth} />
      <div style={{ width: `calc(100% - ${navWidth})` }}>
        <Header headerHeight={headerHeight}></Header>
        <Calendar month={currentMonth} calendarHeight={`calc(100vh - ${headerHeight})`} />
      </div>
    </Body>
  );
};

export default Main;
