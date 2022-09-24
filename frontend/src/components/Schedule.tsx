import React from 'react';
import ScheduleItem from './ScheduleItem';

const Schedule = () => {
  return (
    <div className="overflow-auto pb-16 pt-4 flex-1">
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
    </div>
  );
};

export default Schedule;
