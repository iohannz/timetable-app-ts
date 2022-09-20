import React, { useState } from 'react';
import { AiOutlineSchedule, AiOutlineClockCircle } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div>
      <div className="btm-nav btm-nav-xl">
        <Link to="/">
          <button>
            <AiOutlineSchedule />
            <span className="btm-nav-label">Schedule</span>
          </button>
        </Link>
        <Link to="/reminders">
          <button>
            <AiOutlineClockCircle />
            <span className="btm-nav-label">Reminders</span>
          </button>
        </Link>
        <Link to="/settings">
          <button>
            <FiSettings />
            <span className="btm-nav-label">Settings</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
