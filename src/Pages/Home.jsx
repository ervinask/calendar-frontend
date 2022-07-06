import React, { useEffect } from 'react';
import { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import dayjs from 'dayjs';
import { useState } from 'react';

const Home = () => {
  const lopas = () => console.log(dayjs().format('MMMM DD HH:mm:ss'));

  setInterval(lopas(), 1);

  // const [time, setTime] = useState(dayjs().format('MMMM DD HH:mm:ss'));

  return <div>Labas</div>;
};

export default Home;
