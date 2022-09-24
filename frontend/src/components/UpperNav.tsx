import React from 'react';
import CalendarComp from './CalendarComp';
import DateCarousel from './DateCarousel';

const UpperNav = () => {
  return (
    <div className="navbar flex flex-1 flex-wrap bg-base-100 justify-between items-center">
      <div className="flex flex-wrap max-w-[200px]">
        <h3 className=" text-xl mr-2">11-206</h3>
        <p>21 September, even</p>
      </div>
      <CalendarComp />
      {/* <DateCarousel /> */}
    </div>
  );
};

export default UpperNav;
