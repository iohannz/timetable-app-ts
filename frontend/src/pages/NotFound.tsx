import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import UpperNav from '../components/UpperNav';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full max-w-3xl">
      <UpperNav />
      <BottomNav />
    </div>
  );
};

export default NotFound;
