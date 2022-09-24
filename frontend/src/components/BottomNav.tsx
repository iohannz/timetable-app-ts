import React, { useState } from 'react';
import { AiOutlineSchedule, AiOutlineClockCircle } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className=" btm-nav btm-nav-xl left-1/2 max-w-3xl w-full translate-x-[-50%]">
      <Link to="/">
        <AiOutlineSchedule />
        <span className="btm-nav-label">Schedule</span>
      </Link>
      <Link to="/reminders">
        <AiOutlineClockCircle />
        <span className="btm-nav-label">Reminders</span>
      </Link>
      <Link to="/settings">
        <FiSettings />
        <span className="btm-nav-label">Settings</span>
      </Link>
    </div>
  );
};

export default BottomNav;
