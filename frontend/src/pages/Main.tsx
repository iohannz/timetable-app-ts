import React from 'react';
import BottomNav from '../components/BottomNav';
import DateCarousel from '../components/DateCarousel';
import Schedule from '../components/Schedule';
import UpperNav from '../components/UpperNav';

const Main = () => {
  return (
    <>
      <UpperNav />
      <DateCarousel />
      <Schedule />
      <BottomNav />
    </>
  );
};

export default Main;
