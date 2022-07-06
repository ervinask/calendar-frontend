import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import dayjs from 'dayjs';
import EventCardsCon from './EventCardsCon';
import EventCard from '../EventCard/EventCard';

export default {
  title: 'EventCardsCon',
  component: EventCardsCon,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <EventCardsCon>
      <EventCard
        title="Kalėdos"
        date={'July 9'}
        startTime={'20:25'}
        endTime={'20:30'}
        description={
          'Per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų'
        }
      />
      <EventCard
        title="Kalėdos"
        date={'July 9'}
        startTime={'20:25'}
        endTime={'20:30'}
        description={
          'Per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų'
        }
      />
      <EventCard
        title="Kalėdos"
        date={'July 9'}
        startTime={'20:25'}
        endTime={'20:30'}
        description={
          'Per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų'
        }
      />
      <EventCard
        title="Kalėdos"
        date={'July 9'}
        startTime={'20:25'}
        endTime={'20:30'}
        description={
          'Per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų'
        }
      />
      <EventCard
        title="Kalėdos"
        date={'July 9'}
        startTime={'20:25'}
        endTime={'20:30'}
        description={
          'Per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų'
        }
      />
    </EventCardsCon>
  </ThemeProvider>
);
