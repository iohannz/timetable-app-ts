import React from 'react';

const UpperNav = () => {
  return (
    <div className="navbar fixed bg-base-100 justify-center">
      <div className="dropdown dropdown-hover ">
        <label tabIndex={0} className="btn btn-ghost normal-case text-xl">
          <h3>11-206</h3>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <p>21 September, even</p>
    </div>
  );
};

export default UpperNav;
