import React from 'react';

interface DateCarouselItemProps {
  date: number | string;
}

const DateCarouselItem = ({ date }: DateCarouselItemProps) => {
  return (
    <div className="btn w-12 h-12 btn-ghost border active:border-primary">
      <span>{date}</span>
      <span>MON</span>
    </div>
  );
};

export default DateCarouselItem;
