import React from 'react';
import DateCarouselItem from './DateCarouselItem';

const DateCarousel = () => {
  const days = [11, 12, 13, 14, 15, 16, 17, 18, 19];

  return (
    <div className="flex justify-center overflow-auto mx-4">
      {days.map((date) => (
        <DateCarouselItem date={date} />
      ))}
    </div>
  );
};

export default DateCarousel;
