import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import EventCard from './EventCard';

export default {
  title: 'EventCard',
  component: EventCard,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <EventCard
      title="Kalėdos"
      date={'July 9'}
      startTime={'20:25'}
      endTime={'20:30'}
      description={
        'Per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų per Kalėdas keliausiu pas močiutę kepti blynų ir tada iškepsime daug skanių blynų ir kepsime dar daugiau skanių blynųų'
      }
    />
  </ThemeProvider>
);
