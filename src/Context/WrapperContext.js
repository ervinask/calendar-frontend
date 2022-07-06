import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

export default function WrapperContext(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [registerError, setRegisterError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [event, setEvent] = useState(false);
  const [getEvent, setGetEvent] = useState();
  const [eventModal, setEventModal] = useState(false);
  const [currentEventData, setCurrentEventData] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        registerError,
        setRegisterError,
        loginError,
        setLoginError,
        event,
        setEvent,
        getEvent,
        setGetEvent,
        eventModal,
        setEventModal,
        currentEventData,
        setCurrentEventData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
