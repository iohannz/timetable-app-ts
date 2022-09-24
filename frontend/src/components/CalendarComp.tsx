import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import { AiOutlineCalendar } from 'react-icons/ai';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalendarComp = () => {
  const [calendar, setCalendar] = useState('');
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    setCalendar(format(new Date(), 'MM/dd/yyyy'));
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e: any) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: any) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSelect = (date: any) => {
    setCalendar(format(date, 'MM/dd/yyyy'));
  };

  return (
    <div className="calendarWrap relative">
      <AiOutlineCalendar onClick={() => setOpen((open) => !open)} className=" text-xl" />
      <div ref={refOne} className="absolute right-2 top-12">
        {open && <Calendar date={new Date()} onChange={handleSelect} className="calendarElement" />}
      </div>
    </div>
  );
};

export default CalendarComp;
