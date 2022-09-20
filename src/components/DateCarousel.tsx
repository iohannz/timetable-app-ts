import React from 'react';
import DateCarouselItem from './DateCarouselItem';

const DateCarousel = () => {
  const days = [11, 12, 13, 14, 15, 16, 17];

  return (
    <div className="flex flex-wrap justify-center">
      {days.map((date) => (
        <DateCarouselItem date={date} />
      ))}
    </div>
  );
};

export default DateCarousel;
