import React from 'react';

const ScheduleItem = () => {
  return (
    <div className="flex flex-wrap my-2">
      <div className="w-full flex mb-2">
        <span className="bg-secondary text-center w-10 rounded-md text-black mr-2">1</span>
        <h4>
          <span className="font-bold text-white">08:30</span> - 10:00
        </h4>
      </div>
      <div className="bg-primary w-full mx-4 rounded-md px-2 py-2 leading-5">
        <h3 className="font-bold text-white py-1">Русский язык и культура речи</h3>
        <p className="mb-1">Учебное здание №14, Галиулина Ильвира Рафаилевна</p>
        <span className="font-bold">1305</span>
      </div>
    </div>
  );
};

export default ScheduleItem;
