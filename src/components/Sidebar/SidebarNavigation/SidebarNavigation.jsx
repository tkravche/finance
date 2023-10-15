import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistic">Statistics</NavLink>
      </li>
    </ul>
  );
};

export default SidebarNavigation;
