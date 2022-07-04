import React from 'react';

const Home = () => {
  fetch('http://localhost:8080/v1/events/')
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div>Home</div>;
};

export default Home;
