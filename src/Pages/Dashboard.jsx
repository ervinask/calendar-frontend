import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchCon from '../components/SearchCon/SearchCon';
import EventCard from '../components/EventCard/EventCard';
import EventCardsCon from '../components/EventCardsCon/EventCardsCon';
import Header from '../components/Header/Header';
import Notification from '../components/Notification/Notification';
import dayjs from 'dayjs';

const url = process.env.REACT_APP_BACK_URL;

const DashBoard = () => {
  const navigate = useNavigate();
  const { getEvent, setGetEvent, setCreateEventModal } = useContext(GlobalContext);
  const [nodata, setNodata] = useState();

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

      if (data.length === 0) {
        setNodata('You do not have any events created');
      }

      data.sort(function (a, b) {
        return dayjs(a.date).unix() - dayjs(b.date).unix();
      });
      return setGetEvent(data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchEvents = async (input) => {
    try {
      const res = await fetch(`${url}v1/events/search/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();

      if (data.err) {
        return setGetEvent('');
      }
      return setGetEvent(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const res = await fetch(`${url}v1/events/delete/` + id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await res.json();
      return getEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      return navigate('/');
    }
    getEvents();
  }, []);

  setCreateEventModal(false);

  return (
    <Body>
      <Header title={'Dashboard'}></Header>
      <Navigation />
      <SearchCon>
        <SearchBar
          handleChange={(input) => {
            searchEvents({ input: input });
          }}
        />
        <EventCardsCon>
          {nodata && <Notification> {nodata}</Notification>}
          {getEvent &&
            getEvent.map((item, idx) => (
              <EventCard
                handleDelete={() => deleteEvent(item.id)}
                key={idx}
                title={item.title}
                date={item.date}
                startTime={item.startTime}
                endTime={item.endTime}
                description={item.description}
              />
            ))}
        </EventCardsCon>
      </SearchCon>
    </Body>
  );
};

export default DashBoard;
