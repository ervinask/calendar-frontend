import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Statistics.styles';
import dayjs from 'dayjs';

const Statistics = () => {
  const [stats, setStats] = useState();

  const getStats = async () => {
    try {
      const res = await fetch('http://localhost:8080/v1/events/', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      const data = await res.json();

      if (data.length === 0) {
        setStats({ ...stats, past: 0, upcoming: 0, total: 0 });
      }

      let past = data.filter((word) => dayjs(word.date).unix() < dayjs().unix());
      let upcoming = data.filter((word) => dayjs(word.date).unix() > dayjs().unix());

      return setStats({ ...stats, past: past.length, upcoming: upcoming.length, total: data.length });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(stats);
  useEffect(() => {
    getStats();
  }, []);

  return (
    <S.Statistics>
      <S.Title>Your statistics</S.Title>
      {stats && (
        <S.StatCon>
          <S.Space>
            <S.Stat>Past Events:</S.Stat>
            <S.Result>{stats.past}</S.Result>
          </S.Space>
          <S.Space>
            <S.Stat>Upcoming Events:</S.Stat>
            <S.Result>{stats.upcoming}</S.Result>
          </S.Space>
          <S.Space>
            <S.Stat>Total Events:</S.Stat>
            <S.Result>{stats.total}</S.Result>
          </S.Space>
        </S.StatCon>
      )}
    </S.Statistics>
  );
};

Statistics.propTypes = {};

export default Statistics;
