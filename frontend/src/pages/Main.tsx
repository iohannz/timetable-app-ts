import React from 'react';
import BottomNav from '../components/BottomNav';
import DateCarousel from '../components/DateCarousel';
import Schedule from '../components/Schedule';
import UpperNav from '../components/UpperNav';

const Main = () => {
  return (
    <div className="w-full max-w-3xl">
      <UpperNav />
      <Schedule />
      <BottomNav />
    </div>
  );
};

export default Main;
