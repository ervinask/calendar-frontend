import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from '../util';
import Calendar from '../components/Calendar/Calendar';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';
import NavigationContent from '../components/NavigationContent/NavigationContent';
import MiniCalendar from '../components/MiniCalendar/MiniCalendar';

const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  let navWidth = '4rem';
  let headerHeight = '6rem';
  let navContentWidth = '18rem';

  return (
    <Body>
      <Header headerHeight={headerHeight}></Header>
      <Navigation navWidth={navWidth} navHeight={`calc(100vh - ${headerHeight})`} />
      <NavigationContent navContentWidth={navContentWidth} navContentHeight={`calc(100vh - ${headerHeight})`}>
        <MiniCalendar />
      </NavigationContent>
      <Calendar
        month={currentMonth}
        calendarHeight={`calc(100vh - ${headerHeight})`}
        calendarWidth={`calc(100% - ${navWidth} - ${navContentWidth})`}
      />
    </Body>
  );
};

export default Main;
