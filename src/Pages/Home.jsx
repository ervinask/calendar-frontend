import React, { useEffect } from 'react';
import { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';

const Home = () => {
  const { event, getEvent, setGetEvent } = useContext(GlobalContext);

  useEffect(() => {
    getUserRecords();
    console.log('ate');
  }, [event]);

  const getUserRecords = async () => {
    try {
      const res = await fetch('http://localhost:8080/v1/events/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await res.json();
      return setGetEvent(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {getEvent.map((item) => (
        <p>{item.id}</p>
      ))}
    </div>
  );
};

export default Home;
